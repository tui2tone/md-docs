var config = require("../../config")
var _ = require("underscore")

config.fonts

var gulp = require('gulp');
gulp.task("assets", [ "assets:images", "assets:fonts", "assets:config" ]);
gulp.task("assets:config", ["assets:config:fonts", "assets:config:css"])

gulp.task("assets:fonts", function() {
  return gulp.src("./assets/fonts/**/*")
    .pipe(gulp.dest('temp/assets/fonts/'))
});

gulp.task("assets:images", function() {
  return gulp.src("./assets/images/**/*")
    .pipe(gulp.dest('temp/assets/images/'))
});

gulp.task("assets:config:fonts", function() {
  _.mapObject(config.fonts, function(val, key) {
    gulp.src(val)
      .pipe(gulp.dest('temp/assets/fonts/' + key))
      return null
  });
});

gulp.task("assets:config:css", function() {
  _.mapObject(config.css, function(val, key) {
    gulp.src(val)
      .pipe(gulp.dest('temp/assets/css/' + key))
      return null
  });
});