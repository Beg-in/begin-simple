'use strict';

const gulp = require('gulp');
const del = require('del');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const pug = require('gulp-pug');

gulp.task('compress', ['clean'], function() {
  gulp.src(['src/js/**/*.js', 'node_modules/letsgo/letsgo.js'])
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
  gulp.src('styles/**/*.{sass,scss,css}')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: '*'}))
    .pipe(gulp.dest('docs/css'));
});

gulp.task('minify', ['clean'], function() {
  gulp.src('src/views/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('docs'));
  gulp.src('src/views/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('docs'));
});

gulp.task('move', ['clean'], function() {
  gulp.src('src/fonts/**/*.{ttf,otf,woff,woff2,svg,eot}')
    .pipe(gulp.dest('docs/fonts'));
  gulp.src('src/images/**/*.{svg,png,jpg,jpeg,gif,ico}')
    .pipe(gulp.dest('docs/images'));
  gulp.src(['src/media/**/*', '!src/media/**/README.md'])
    .pipe(gulp.dest('docs/media'));
  gulp.src(['src/other/**/*', '!src/other/**/README.md'])
    .pipe(gulp.dest('docs'));
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
  gulp.watch('src/styles/**/*.{sass,scss}', ['tasklist']);
  gulp.watch('src/node_modules/frow/**/*.{sass,scss,css}', ['tasklist']);
  gulp.watch('src/js/**/*.js', ['tasklist']);
  gulp.watch('src/node_modules/letsgo/letsgo.js', ['tasklist']);
  gulp.watch('src/fonts/**/*.{ttf,otf,woff,woff2,svg,eot}', ['tasklist']);
  gulp.watch('src/images/**/*.{svg,png,jpg,jpeg,gif,ico}', ['tasklist']);
  gulp.watch('src/views/**/*.{pug,html}', ['tasklist']);
});

gulp.task('tasklist', ['move', 'compress', 'styles', 'minify']);

gulp.task('c9', ['c9server', 'tasklist', 'watchlist']);

gulp.task('default', ['webserver', 'tasklist', 'watchlist']);