'use strict';

import gulp from "gulp";
import data from "gulp-data";
import jade from "gulp-jade";
import path from "path";
import rename from "gulp-rename";
import fs from 'fs'

gulp.task('render', () => {
  const json = JSON.parse(fs.readFileSync('./temp/json/all.json', 'utf8'));
  
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
