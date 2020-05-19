var config = require('../config');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');
var gulpSass = require('gulp-sass');

module.exports.task = function(gulp, paths) {
	return function app_styles() {
    return gulp.src(paths.app.styles)
      .pipe(gulpConcat('app.scss'))
      .pipe(gulpSass())
      .pipe(gulp.dest(config.destDir + '/assets/css/'))
      .pipe(gulpConnect.reload());
  }
}
