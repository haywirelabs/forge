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


Known Bugs
----------

- Issue with JSON encoding.  Appears to be adding in HTML escaped quotes which JSON linters are coming up with Parse errors on.
- ~~Collections is not rendering through template~~
  - Removed Collections for Now
- Clean URL functionality was excluded for now.  Not sure if this would be a requirement for JSON exposure.  Standard functionality expects HTML files, so some tweaking will be required to make this happen.



Run Metalsmith CLI tool
-----------------------

**Needs updating (do not run at this time)**

```
npm install
npm run build
```
