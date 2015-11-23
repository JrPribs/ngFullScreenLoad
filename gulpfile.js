'use strict';

var gulp = require('gulp'),
    packageJson = require('./package.json'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');

    gulp.task('default', function() {
        return gulp.src(['fullScreenLoad.service.js', 'fullScreenLoad.directive.js'])
            .pipe(sourcemaps.init())
            .pipe(babel({
                blacklist: ['strict'],
                only: /(src\/*.js|tests\/*.js)/
            }))
            .pipe(ngAnnotate())
            .pipe(concat('fullScreenLoad.js'))
            .pipe(gulp.dest('dist/'))
            .pipe(size({title: 'fullScreenLoad.js'}))
            .pipe(uglify({
                screwIE8: true
            }))
            .pipe(rename('fullScreenLoad.min.js'))
            .pipe(size({title: 'fullScreenLoad.min.js'}))
            .pipe(size({title: 'fullScreenLoad.min.js', gzip: true}))
            .pipe(sourcemaps.write('.', {sourceRoot: '/'}))
            .pipe(gulp.dest('dist/'));
    });
