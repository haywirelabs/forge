Forge CMS
=========

Forge CMS is a content syndication generator based on Metalsmith.io

Installation
------------

1. ```git clone https://github.com/haywirelabs/forge.git```
2. ```cd forge```
3. ```npm install```
4. ```npm install gulp -g```
5. ```npm install jshint -g```

Run Tool
--------

1. Ensure "content" is available at /content directory.
2. ```node bin/forge_content.js```
3. Deployment distribution will be created in "dist" directory.

Run Debugger
------------

Output all debugging messages

```DEBUG=* node bin/forge_content.js```

Output all debugging messages from the main.js

```DEBUG=forge-main node bin/forge_content.js```

Output all debugging messages from the markdown engine

```DEBUG=markdown-json node bin/forge_content.js```

Output all debugging messages from the template engine

```DEBUG=metalsmith-templates node bin/forge_content.js```

Output all debugging messages from the collections engine

```DEBUG=metalsmith-collections node bin/forge_content.js```

Output all debugging messages from the language collection engine

```DEBUG=language-collection node bin/forge_content.js```

Output all debugging messages from the feed publishing engine

```DEBUG=feed-publishing node bin/forge_content.js```

Gulp Functionality
------------------

Run Linting functionality

```gulp lint```

Build Distribution folder (defaults to '/dist')

```gulp build```

Build Distribution folder with all debugging output

```gulp debug```

Build Distribution folder, and serve it with a webserver.  Application will watch for file changes and restart the event loop if a change is made.

```gulp serve```

Run Metalsmith CLI tool
-----------------------

**Need to remove this.  Functionality is no longer supported.**

```
npm install
npm run build
```
