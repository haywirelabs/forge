var debug = require('debug')('language-collection'),
    util = require('util');

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

    for (collection in metalsmith.data.collections){
        debug("processing collection: " + collection);
        for (coll in metalsmith.data.collections[collection]){
            if(typeof metalsmith.data.trial[coll] != 'undefined'){
                for (lang in metalsmith.data.trial[coll].language){
                    language = metalsmith.data.trial[coll].language;
                    title = metalsmith.data.trial[coll].title;
                    if (! languages[language]){
                        languages[language] = [];
                    }
                    if(languages[language].indexOf(title) === -1){
                        debug("processing " + language + " document: " + title);
                        languages[language].push(title);
                    }
                }
            }
        }
    }

    metalsmith.data.languages = languages;

    //debug(util.inspect(metalsmith));

    done();
  }
}