var gulp = require('gulp');
var browserSync = require('browser-sync');

const SERVE_CONFIG = {
  server: {
    baseDir: "./temp/",
    index: "/index.html"
  }
}

const server = browserSync.create()

gulp.task('browser-sync', function() {
  server.init(SERVE_CONFIG);
});

gulp.task("refresh", function() {
  return gulp.src("./src/app.js")
    .pipe(server.stream())
})