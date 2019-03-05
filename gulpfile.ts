var gulp = require('gulp');
var gzip = require('gulp-gzip');
var webp = require('gulp-webp');

gulp.task('default',  gulp.series(clean, convertJP2, compress));

function clean(done) {
  // del(['./dist/**/*.*']);
  done();
}

function compress(done) {
  return gulp.src(['./dist/*.js'])
  .pipe(gzip())
  .pipe(gulp.dest('./dist', {overwrite: true}));
  done();
}

function convertJP2(done) {
  return gulp.src(['./src/assets/images/*.{jpg,png,jpeg}'])
    .pipe(webp())
    .pipe(gulp.dest('./dist/assets/images', {overwrite: true}));
    done();
}

// gulp.task('default', () =>
// 	gulp.src('dist/assets/images/*.{jpg}')
// 		.pipe(webp())
// 		.pipe(gulp.dest('dist/assets/images'))
// );
