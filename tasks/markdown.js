'use strict';

import gulp from "gulp";
import markdown from "gulp-markdown-to-json";

gulp.task('markdown', function () {
  return gulp.src("./src/markdown/**/*.md")
    .pipe(markdown({
      pedantic: true,
      smartypants: true
    }))
    .pipe(gulp.dest('temp/json'))
});