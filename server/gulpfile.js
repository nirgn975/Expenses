'use strict';
var gulp = require('gulp');
var coveralls = require('gulp-coveralls');

gulp.task('coverage', function () {
  gulp.src([
    './coverage/lcov.info',
    '../client/coverage/coverage.lcov'
  ]).pipe(coveralls());
});
