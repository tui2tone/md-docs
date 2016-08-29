
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');

function build(file, watch, dest) {
  var props = {
    entries: [file],
    extensions: ['.js'],
    debug : true,
    fast: true, 
    'insert-globals': true,
    fullPaths: true,
    cache: {},
    packageCache: {},
    ignore: /(bower_components)|(node_modules)/,
    ignoreWatch: ['**/node_modules/**', '**/bower_components/**'],
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  bundler.transform(babelify)

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', function(e) {
        console.log(e)
      })
      .pipe(source('app.js'))
      .pipe(gulp.dest(dest))
      .on('end', function(){ 
        gutil.log('Done!'); 
      });
  }

  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  return rebundle();
}

gulp.task("js", function() {
  return build('./components/app.js', true, './temp/js/');
});