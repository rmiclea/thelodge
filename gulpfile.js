var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task('sass', function () {
  return gulp.src('wp-content/themes/elixir-jellythemes/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(minifyCss({keepSpecialComments: 1}))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(livereload())
    .pipe(gulp.dest('wp-content/themes/elixir-jellythemes/'));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('wp-content/themes/elixir-jellythemes/scss/*.scss', ['sass'] );
});
