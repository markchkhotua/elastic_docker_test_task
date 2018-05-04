'use strict';

const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    sassify = require('sassify'),
    concat = require('gulp-concat'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require("gulp-sourcemaps"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    webpack = require('webpack');

const BUILD_DIR = './dist';

gulp.task('default', function () {

});

gulp.task('bundle-sass', function () {
    return gulp.src('./assets/styles/style.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(`${BUILD_DIR}/styles`));
});

gulp.task('copy-template', function () {
    return gulp.src(['./index.html'])
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('copy-images', function () {
    return gulp.src(['./assets/**', '!./assets/styles', '!./assets/styles/**'])
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('bundle-dev', function () {
    return gulp.src('./index.js')
        .pipe(browserify({insertGlobals: true}))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('bundle-prod', function () {
    return gulp.src('./index.js')
        .pipe(browserify({insertGlobals: true}))
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-dev', ['bundle-dev', 'bundle-sass', 'copy-images', 'copy-template']);
gulp.task('build-prod', ['bundle-prod', 'bundle-sass', 'copy-images', 'copy-template']);
