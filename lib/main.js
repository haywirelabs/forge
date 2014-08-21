//main.js

/*
Initialize Vars
 */
  var metalsmith = require('metalsmith'),
      markdown_to_json = require('../lib/metalsmith-markdown-json.js'),
      templates = require('metalsmith-templates'),
      collections = require('metalsmith-collections'),
      contentDir = '../content',
      templateDir = '../templates',
      distributionDir = '../dist';

  var template_options = {
    engine : 'handlebars'
  };
/*
Main
*/

(function(){

console.log("Started Metalsmith Demo");

metalsmith(__dirname)
    .source(contentDir)
    .use(markdown_to_json())
    //.use(templates("swig"))
    .use(collections({
      news: {
        pattern: '*.md'
      }
    }))
    .destination(distributionDir)
    .build();

console.log("Ended Metalsmith Demo");

}).call(this);
