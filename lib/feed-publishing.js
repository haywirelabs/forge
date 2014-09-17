'use strict';

var debug = require('debug')('feed-publishing'),
    Encoder = require('node-html-encoder').Encoder;
var encoder = new Encoder('entity');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){

    /*
    * Publish each collection, by language, to the distribution directory
    */

    for (var language in metalsmith.data.languages){
        debug('publishing language: ' + language);
        for (var coll in metalsmith.data.collections){
            var jsonCollection = {};
            debug('publishing collection: ' + coll);
            metalsmith.data.collections[coll].forEach(function(item){

                var webDoc = {};

                webDoc.title = item.title;
                webDoc.date = item.date;
                webDoc.template = item.template;
                webDoc.collection = coll;
                webDoc.language = language;
                webDoc.rank = item.rank;
                webDoc.contents = encoder.htmlEncode(item.contents.toString('utf-8'));
                webDoc.mode = item.mode;
                if(language === item.language){
                    var jsonDoc = {
                        'document': {
                            'title': webDoc.title,
                            'date': webDoc.date,
                            'collection': webDoc.collection,
                            'language': webDoc.language,
                            'rank': webDoc.rank,
                            'contents': webDoc.contents
                        }
                    };
                    if (! jsonCollection[coll]){
                        jsonCollection[coll] = [];
                    }
                    jsonCollection[coll].push(jsonDoc);
                }
            });

        files['lang/' + language + '/' + coll + '/' + 'index.json'] = {
            template: 'collection-trial.hbt',
            mode: '0644',
            contents: JSON.stringify(jsonCollection),
            title: coll,
        };

        }
    }

    //debug(util.inspect(metalsmith));

    done();
  };
}