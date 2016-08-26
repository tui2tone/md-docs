'use strict';

import gulp from 'gulp';
import del from 'del';

gulp.task("clean", function() {
  return del(['./temp/']).then(function(paths) {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
})