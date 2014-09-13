var debug = require('debug')('feed-collection'),
    util = require('util');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){
    debug(util.inspect(metalsmith.data.collections, showHidden=true, depth=10, colorize=true));

    for (c in metalsmith.data.collections) {
        collectionName = c;
        debug(util.inspect(c));

        for(m in metalsmith.data.collections[c]){
            debug(util.inspect(m));
        }
    }

    done();
  }
}