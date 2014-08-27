Forge CMS
=========

Forge CMS is a content syndication generator based on Metalsmith.io

Installation
------------

1. ```git clone https://github.com/haywirelabs/forge.git```
2. ```cd forge```
3. ```npm install```

Run Tool
--------

1. ```node bin/forge_content.js```
2. Deployment distribution will be created in "dist" directory.

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
