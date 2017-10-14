'use strict';

const gulp = require('gulp');
const del = require('del');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

gulp.task('compress', ['clean'], function() {
  gulp.src(['js/**/*.js', 'node_modules/letsgo/letsgo.js'])
  .pipe(minify({
    ext:{
      min:'.js'
    },
    exclude: ['tasks'],
    noSource: true,
    ignoreFiles: ['.combo.js', '-min.js']
  }))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('styles', ['clean'], function() {
  gulp.src(['sass/**/*.scss', 'sass/**/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('minify', ['clean'], function() {
  return gulp.src('*.html')
  .pipe(htmlmin({
    collapseWhitespace: true,
    minifyJS: true
  }))
  .pipe(gulp.dest('docs'));
});

gulp.task('move', ['clean'], function() {
  gulp.src('fonts/**/*.{ttf,otf,woff,woff2,svg,eot}')
    .pipe(gulp.dest('docs/fonts'));
  gulp.src('images/**/*.{svg,png,jpg,jpeg,gif,ico}')
    .pipe(gulp.dest('docs/images'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: {
        enable: true,
      },
      directoryListing: true,
      open: 'docs/index.html'
    })
  );
});

gulp.task('c9server', function() {
  gulp.src('')
    .pipe(webserver({
      port: 8080,
      host: '0.0.0.0',
      livereload: {
        enable: true,
        port: 8081,
      },
      directoryListing: true,
      open: 'docs/index.html',
    })
  );
});

gulp.task('clean', function() {
  return del(['docs'], {force:true});
});

gulp.task('watchlist', function() {
  gulp.watch('sass/**/*.{sass,scss}', ['tasklist']);
  gulp.watch('node_modules/frow/**/*.{sass,scss}', ['tasklist']);
  gulp.watch('js/**/*.js', ['tasklist']);
  gulp.watch('node_modules/letsgo/letsgo.js', ['tasklist']);
  gulp.watch('fonts/**/*.{ttf,otf,woff,woff2,svg,eot}', ['tasklist']);
  gulp.watch('images/**/*.{svg,png,jpg,jpeg,gif,ico}', ['tasklist']);
  gulp.watch('*.html', ['tasklist']);
});

gulp.task('tasklist', ['move', 'compress', 'styles', 'minify', 'watchlist']);

gulp.task('c9', ['c9server', 'tasklist']);

gulp.task('default', ['webserver', 'tasklist']);