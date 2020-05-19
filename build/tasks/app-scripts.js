var config = require('../config');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');

module.exports.task = function(gulp, paths) {
	return function app_scripts() {
    return gulp.src(paths.app.scripts)
      .pipe(gulpConcat('app.js'))
      .pipe(gulp.dest(config.destDir + '/assets/js/'))
      .pipe(gulpConnect.reload());
  }
}
