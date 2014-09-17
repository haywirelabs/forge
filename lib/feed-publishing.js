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
            //debug("publishing collection: " + coll);
            metalsmith.data.collections[coll].forEach(function(item){
                //debug(item);
                debug(item.title);
                debug(item.date);
                debug(item.template);
                debug(item.collection);
                debug(item.language);
                debug(item.rank);
                debug(item.contents);
                debug(item.mode);
            })

        }
    }

    //debug(util.inspect(metalsmith));

    done();
  }
}