var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// JSHint Task
gulp.task('lint', function(){
  gulp.src(['lib/*.js', 'bin/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('watch', ['lint'], function(){
  gulp.watch(['lib/*.js', 'bin/*.js'], 'lint');
});

gulp.watch(['app/index.html', 'app/views/**/*.html'], [
  'views'
])

/**
*  Gulp Server
*/

var embedlr = require('gulp-embedlr'),
    refresh = require('gulp-livereload'),
    lrserver = require('tiny-lr')(),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

var server = express();

server.use(livereload({port: livereloadport}));
server.use(express.static('./dist'));
server.all('/*', function(req, res){
  res.sendfile('index.html', {root: 'dist'});
});

gulp.task('dev', function(){
  server.listen(serverport);
  lrserver.listen(livereloadport);
  gulp.run('watch');
})