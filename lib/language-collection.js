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
    * All Collections
    */

    //debug(util.inspect(metalsmith.data.collections, showHidden=true, depth=10, colorize=true));

    for (c in metalsmith.data.collections) {

        /**
        * Each Collection
        */

        collectionName = c;
        //debug('Collection Name: ' + util.inspect(collectionName));
        //debug(util.inspect(c));

        for(d in metalsmith.data.collections[c]){

            /*
            * Each document within the Collection
            */



            var contentDocument = metalsmith.data.collections[c][d];
            debug(util.inspect(contentDocument));
            debug(util.inspect(languages));

            /*
            if(contentDocument.language){

               languages[c].push(contentDocument);
               debug(util.inspect(contentDocument));
            }
            */
        }
    }

    done();
  }
}