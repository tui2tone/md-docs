'use strict';

import gulp from "gulp";

gulp.task("js", () => {
  return gulp.src("./src/components/app.js")
    .pipe(gulp.dest('temp/js/'))
});