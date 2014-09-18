'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    clean = require('gulp-clean');

// JSHint Task
gulp.task('lint', function(){
  gulp.src(['lib/*.js', 'bin/*.js', 'gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('watch', ['lint'], function(){
  gulp.watch(['lib/*.js', 'bin/*.js'], ['lint']);
});

gulp.task('build', ['lint'], shell.task('node bin/forge_content.js'));
gulp.task('debug', ['lint'], shell.task('DEBUG=* node bin/forge_content.js'));

/**
*  Gulp Server
*/

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35728,
    serverport = 3000;

var server = express();

server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));
server.all('/*', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

/*
* Routes
*/

server.get('/', function(req, res){
  res.sendFile('index.html', { root: 'server' });
});

server.get('/en-us/trial', function(req, res){
  res.sendFile('/lang/en-us/trial/index.json', { root: 'dist' });
});

server.get('/fr/trial', function(req, res){
  res.sendFile('/lang/fr/trial/index.json', { root: 'dist' });
});

server.get('/zeta/trial', function(req, res){
  res.sendFile('/lang/zeta/trial/index.json', { root: 'dist' });
});

server.get('/en-us/alliance', function(req, res){
  res.sendFile('/lang/en-us/alliance/index.json', { root: 'dist' });
});

server.get('/fr/alliance', function(req, res){
  res.sendFile('/lang/fr/alliance/index.json', { root: 'dist' });
});

server.get('/zeta/alliance', function(req, res){
  res.sendFile('/lang/zeta/alliance/index.json', { root: 'dist' });
});

/*
* Build, Serve and Watch Application
*/

gulp.task('serve', ['debug'], function(){
  server.listen(serverport);
  lrserver.listen(livereloadport);
  gulp.run('watch');
});