var gulp = require('gulp');
var data = require('gulp-data');
var jade = require('gulp-jade');
var rename = require('gulp-rename');
var fs = require('fs');
var _  = require('underscore')

gulp.task('render', function() {
  const json = JSON.parse(fs.readFileSync('temp/json/all.json', 'utf8'));
  
  _.each(json, function(item) { 
    const layout = item.layout != undefined ? "layouts/" + item.layout + ".jade": "layouts/index.jade"

    gulp.src(layout)
      .pipe(data(function(file) {
        return item;
      }))
      .pipe(jade())
      .pipe(rename(item.file))
      .pipe(gulp.dest('temp'));
  })
});
