var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var del     = require('del');

gulp.task('minify', function() {
  return gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('minified'))
});

gulp.task('minify-css', function() {
  return gulp.src('vendor/mocha.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('minified'));
})

gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('minified'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task('default', ['minify-js', 'minify-css', 'minify-html'], function() {
});
