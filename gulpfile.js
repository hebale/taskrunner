var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// path??




gulp.task('test', async function(){
  return browserify('./public/src/ts/index.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist/js/'));

});




gulp.task('default', gulp.parallel(
  'test'
));