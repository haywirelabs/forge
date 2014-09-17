var debug = require('debug')('language-collection'),
    async = require('async'),
    util = require('util');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){

    var languages = {};

    /*
    * TODO - JO: Currently only for the Trial collection
    * Need to expand for managing all collections.
    */

    for (c in metalsmith.data.trial){
        //debug(metalsmith.data.trial[c]);


        if(typeof metalsmith.data.trial[c] != 'undefined'){
            for (lang in metalsmith.data.trial[c].language){
                language = metalsmith.data.trial[c].language;
                //debug(metalsmith.data.trial[c].rank);
                if (! languages[language]){
                    languages[language] = [];
                }
                languages[language].push(metalsmith.data.trial[c]);
            }
        }
    }


    for (language in languages){
        //debug(util.inspect(language));
        //debug(util.inspect(languages[language]));

        async.forEach = function(o,cb){
            var counter = 0,
                keys = Object.keys(o),
                len = keys.length;
            var next = function() {
                if (counter < len) cb(o[keys[counter++]], next);
            };
            next();
        };

        counter = 0;
        async.forEach(languages[language], function(val, next){
            debug(val.title);
            debug(val.language);
            //debug(counter);
            counter++;
            setTimeout(next, 100);
        })
        if(typeof metalsmith.data.trial[c] === 'string'){
            metalsmith.data.trial[c].foreach(function(d){
                debug(util.inspect(d));
            });
        }

        //jsonString = JSON.stringify(languages[language]);
        files['lang/' + language + '/index.json'] = {
            template: 'collection-trial.hbt',
            mode: '0644',
            contents: 'test',
            title: "Language - '" + language + "'",
            trial: languages[language],
        }
    }

    /*
    * All Collections
    */

    //debug(util.inspect(metalsmith.data.collections, showHidden=true, depth=10, colorize=true));

    //for (c in metalsmith.data.collections) {

        /**
        * Each Collection
        */

        //collectionName = c;
        //debug('Collection Name: ' + util.inspect(collectionName));
        //debug(util.inspect(c));

        //for(d in metalsmith.data.collections[c]){

            /*
            * Each document within the Collection
            */



            //var contentDocument = metalsmith.data.collections[c][d];
            //JSON.parse(contentDocument);
            //debug(util.inspect(contentDocument));
            //languages[contentDocument.languages].push(contentDocument);
            //debug(util.inspect(languages));

            /*
            if(contentDocument.language){

               languages[c].push(contentDocument);
               debug(util.inspect(contentDocument));
            }
            */
        //}
    //}

    done();
  }
}