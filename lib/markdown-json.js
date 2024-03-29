'use strict';

var basename = require('path').basename;
var debug = require('debug')('markdown-json');
var dirname = require('path').dirname;
var extname = require('path').extname;
var marked = require('marked');
//var plugin = new plugin();
/*
* Settings for "marked" markdown parsing
* https://www.npmjs.org/package/marked
*/

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to convert markdown files.
 *
 * @param {Object} options (optional)
 *   @property {Array} keys
 * @return {Function}
 */

function plugin(options){
  options = options || {};
  var keys = options.keys || [];

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!markdown(file)) { return; }
      var data = files[file];
      var dir = dirname(file);
      var json = basename(file, extname(file)) + '.json';

      if ('.' !== dir) { json = dir + '/' + json; }

      debug('converting file: %s', file);
      var str = marked(data.contents.toString(), options);
      data.contents = new Buffer(str);
      keys.forEach(function(key) {
        data[key] = marked(data[key], options);
      });

      delete files[file];
      files[json] = data;
    });
  };
}

/**
 * Check if a `file` is markdown.
 *
 * @param {String} file
 * @return {Boolean}
 */

function markdown(file){
  return /\.md|\.markdown/.test(extname(file));
}