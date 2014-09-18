Forge Publishing
================

Forge is a publishing application to generate syndication edge distributions for web deployment.
Forge is designed to input a directory of markdown files, translate these into JSON, and then publish into files for purpose of deployment to the Internet.

Installation
------------

1. ```git clone https://github.com/haywirelabs/forge.git```
2. ```cd forge```
3. ```npm install```
4. ```npm install gulp -g```
5. ```npm install jshint -g```
6. ```npm install gulp``` (local project version of Gulp)

Run Tool
--------

1. Ensure markdown content is available at /content directory.
2. ```node bin/forge_content.js```
3. Deployment distribution will be created in "dist" directory.

Run Debugger
------------

Output all debugging messages

  - ```DEBUG=* node bin/forge_content.js```

Output all debugging messages from the main.js

  - ```DEBUG=forge-main node bin/forge_content.js```

Output all debugging messages from the markdown engine

  - ```DEBUG=markdown-json node bin/forge_content.js```

Output all debugging messages from the template engine

  - ```DEBUG=metalsmith-templates node bin/forge_content.js```

Output all debugging messages from the collections engine

  - ```DEBUG=metalsmith-collections node bin/forge_content.js```

Output all debugging messages from the language collection engine

  - ```DEBUG=language-collection node bin/forge_content.js```

Output all debugging messages from the feed publishing engine

  - ```DEBUG=feed-publishing node bin/forge_content.js```

Gulp Functionality
------------------

Run Linting functionality

  - ```gulp lint```

Build Distribution folder (defaults to '/dist')

  - ```gulp build```

Build Distribution folder with all debugging output

  - ```gulp debug```

Build Distribution folder and serve it with a webserver.  Application will watch for file changes and restart the event loop if a change is made.
URL: [http://localhost:3000](http://localhost:3000)

  - ```gulp serve```

Roadmap and Patch Notes
-----------------------

Information about Forge patch notes and roadmap are available on the [Forge Project](https://confluence.zenimaxonline.com:8444/display/services/POC+Project+-+Forge) page.