var debug = require('debug')('feed-publishing'),
    util = require('util');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){

    /*
    * Publish each collection, by language, to the distribution directory
    */

    for (language in metalsmith.data.languages){
        debug("publishing language: " + language);
        for (coll in metalsmith.data.collections){
            debug("publishin collection: " + coll);
        }
    }

    //debug(util.inspect(metalsmith));

    done();
  }
}