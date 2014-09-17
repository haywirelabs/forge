//main.js

/**
* Initialize Vars
*/
  var debug = require('debug')('forge'),
      metalsmith = require('metalsmith'),
      util = require('util'),
      markdown_to_json = require('../lib/markdown-json.js'),
      langs = require('../lib/language-collection.js'),
      feeds = require('../lib/feed-collection.js')
      handlebars = require('handlebars'),
      templates = require('metalsmith-templates'),
      collections = require('metalsmith-collections'),
      contentDir = '../content',
      templateDir = '../templates',
      distributionDir = '../dist';

/**
* Handlebars JSON helper
* Outputs variable in JSON
*/

  handlebars.registerHelper('json', function(obj) {
    return JSON.stringify(obj);
  });

/**
* Define Templating options
*/

  var template_options = {
    engine : 'handlebars',
    directory : templateDir
  };

/*
Main
*/

(function(){

console.log("\nForge");

/**
* Execute Publishing via Metalsmith
*/

metalsmith(__dirname)

    /**
    * Identify the Content Source Directory
    */

    .source(contentDir)

    /**
    * Convert Content to JSON
    */

    .use(markdown_to_json())

    /**
    * Use Templating Engine and pass in template options
    * NOTE: Sometimes templates can eat up errors and abstract messages.  For now, commenting out templates temporarily will return errors.
    * TODO: fix templating error trapping
    */

    //.use(templates(template_options))

    /**
    * Create Collections
    */

    .use(collections({
      trial: {
        sortBy: 'language',
        //TODO: Also sort by rank
        //sortBy: 'rank'
      }
    }))

    /**
    * Create Language Collections
    */

    .use(langs())

    /**
    * Create Feed Collections
    */

    //.use(feeds())

    /**
    * Identify JSON Output Destination Directory
    */

    .destination(distributionDir)

    /**
    * Execute the Build
    */

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