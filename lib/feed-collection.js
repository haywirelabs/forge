var debug = require('debug')('feed-collection'),
    util = require('util');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){
    debug(util.inspect(metalsmith.data.collections, showHidden=true, depth=10, colorize=true));
    done();
  }
}