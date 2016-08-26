'use strict';

import gulp from "gulp";
import data from "gulp-data";
import jade from "gulp-jade";
import path from "path";
import rename from "gulp-rename";

gulp.task('render', () => {
  const json = require("../temp/json/all.json")
  
  for(const item of json) {
    gulp.src("src/layouts/**/*.jade")
      .pipe(data((file) => {
        return item;
      }))
      .pipe(jade())
      .pipe(rename(item.file))
      .pipe(gulp.dest('temp'));
  }
});
