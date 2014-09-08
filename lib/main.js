//main.js

/*
Initialize Vars
 */
  var debug = require('debug')('forge'),
      metalsmith = require('metalsmith'),
      util = require('util'),
      markdown_to_json = require('../lib/metalsmith-markdown-json.js'),
      templates = require('metalsmith-templates'),
      collections = require('metalsmith-collections'),
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

console.log("\nForge");

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
      if (err){ done(new Error(err)) }
      else{
        debug("\nFiles: " + util.inspect(files, showHidden=true, depth=10, colorize=true) + "\n");
        debug("\nCollections: " + util.inspect(metalsmith, showHidden=true, depth=10, colorize=true) + "\n");
        console.log("Website has been forged.\n");
      }
    });

console.log("\\m/\n");

}).call(this);