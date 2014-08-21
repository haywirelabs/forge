MetalSmith Demo
===============

This is a CMS demo of Metalsmith

Installation
------------

1. ```git clone https://github.com/haywirelabs/demo-metalsmith```
2. ```cd demo-metalsmith```
3. ```npm install```

Run Tool
--------

1. ```node bin/forge_cms.js```
2. Deployment distribution will be created in "dist" directory.

Known Bugs
----------

- Collections is not rendering through template
- Current templating system (Handlebars) needs to be swapped out for Swig templating engine for JSON encoding functionality
- Clean URL functionality was excluded for now.  Not sure if this would be a requirement for JSON exposure.  Standard functionality expects HTML files, so some tweaking will be required to make this happen.



Run Metalsmith CLI tool
-----------------------

**Needs updating (do not run at this time)**

```
npm install
npm run build
```
