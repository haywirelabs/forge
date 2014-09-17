var debug = require('debug')('feed-collection'),
    util = require('util');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

function plugin(){
  return function(files, metalsmith, done){

    debug(util.inspect(metalsmith));

    done();
  }
}