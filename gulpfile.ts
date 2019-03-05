var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('default',  gulp.series(clean, compress));

function clean(done) {
  // del(['./dist/**/*.*']);
  done();
}

function compress(done) {
  return gulp.src(['./dist/phf-website/*.js'])
  .pipe(gzip())
  .pipe(gulp.dest('./dist/phf-website/', {overwrite: true}));
  done();
}
