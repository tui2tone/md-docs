var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task("watch", function() {
  gulp.watch(["./**/*.sass"], () => {
    return runSequence("sass", "render", "refresh", "clean:json")
  })
  gulp.watch(["./**/*.md"], () => {
    return runSequence("markdown", "render", "refresh", "clean:json")
  })
  gulp.watch(["./**/*.jade"], () => {
    return runSequence("markdown", "render", "refresh", "clean:json")
  })
})