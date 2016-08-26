import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task("watch", () => {
  gulp.watch(["./src/**/*.sass"], () => {
    return runSequence("sass", "render", "refresh")
  })
  gulp.watch(["./src/**/*.md"], () => {
    return runSequence("markdown", "render", "refresh")
  })
})