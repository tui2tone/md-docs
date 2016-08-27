var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task("watch", function() {
  gulp.watch(["./src/**/*.sass"], () => {
    return runSequence("sass", "render", "refresh", "clean:json")
  })
  gulp.watch(["./src/**/*.md"], () => {
    return runSequence("markdown", "render", "refresh", "clean:json")
  })
  gulp.watch(["./src/**/*.jade"], () => {
    return runSequence("markdown", "render", "refresh", "clean:json")
  })
})