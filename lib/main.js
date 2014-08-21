//main.js

/*
Initialize Vars
 */
  var metalsmith = require('metalsmith');
  var contentDir = '../content';
  var distributionDir = '../dist';
/*
Main
*/

(function(){

console.log("Ran Metalsmith");

metalsmith(__dirname)
    .source(contentDir)
    .destination(distributionDir)
    .build();

}).call(this);
