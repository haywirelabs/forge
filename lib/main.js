//main.js

/*
Initialize Vars
 */
  var metalsmith = require('metalsmith'),
      markdown_to_json = require('../lib/metalsmith-markdown-json.js'),
      templates = require('metalsmith-templates'),
      contentDir = '../content',
      templateDir = '../templates',
      distributionDir = '../dist';

  var template_options = {
    engine : 'handlebars',
    directory : templateDir
  };

/*
Main
*/

(function(){

console.log("\nMetalsmith Forge\n666");

metalsmith(__dirname)
    .source(contentDir)
    .use(markdown_to_json())
    .use(templates(template_options))
    .destination(distributionDir)
    .build(function(err,files){
      if (err){ console.log(err); }
      else{ console.log("Website has been forged.\n") }
    });

console.log("\\m/\n");

}).call(this);