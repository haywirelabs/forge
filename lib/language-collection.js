'use strict';

var debug = require('debug')('language-collection');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){

    var languages = {};

    /*
    * Identify languages and append to the metalsmith object
    */

    for (var collection in metalsmith.data.collections){
        debug('processing collection: ' + collection);
        for (var coll in metalsmith.data.collections[collection]){
            if(typeof metalsmith.data.trial[coll] !== 'undefined'){
                for (var lang in metalsmith.data.trial[coll].language){
                    var language = metalsmith.data.trial[coll].language;
                    var title = metalsmith.data.trial[coll].title;
                    if (! languages[language]){
                        languages[language] = [];
                    }
                    if(languages[language].indexOf(title) === -1){
                        debug('processing ' + language + ' document: ' + title);
                        languages[language].push(title);
                    }
                }
            }
        }
    }

    metalsmith.data.languages = languages;

    //debug(util.inspect(metalsmith));

    done();
  };
}