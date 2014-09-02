//main.js

/*
Initialize Vars
 */
  var metalsmith = require('metalsmith'),
      util = require('util'),
      markdown_to_json = require('../lib/metalsmith-markdown-json.js'),
      templates = require('metalsmith-templates'),
      collections = require('metalsmith-collections'),
      contentDir = '../content',
      templateDir = '../templates',
      distributionDir = '../dist';

  var template_options = {
    engine : 'swig',
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
    .use(collections({
      trial: {
        sortBy: 'date',
        reverse: true
      }
    }))
    .destination(distributionDir)
    .build(function(err,files){
      if (err){ console.error(err); }
      else{
        console.log("\n\n");
        console.log(files);
        console.log("\n\n");
        console.log("Collections: " + util.inspect(collections, showHidden=true, depth=10, colorize=true));
        console.log("\n\n");
        console.log("Website has been forged.\n");
      }
    });

console.log("\\m/\n");

}).call(this);