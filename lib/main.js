//main.js

/*
Initialize Vars
 */
  var metalsmith = require('metalsmith'),
      markdown = require('../lib/metalsmith-markdown-json.js'),
      contentDir = '../content',
      distributionDir = '../dist';
/*
Main
*/

(function(){

console.log("Ran Metalsmith");

metalsmith(__dirname)
    .source(contentDir)
    .destination(distributionDir)
    .use(markdown())
    .build();

}).call(this);
