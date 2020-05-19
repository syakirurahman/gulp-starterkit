var config = require('../config');
var gulpConnect = require('gulp-connect');
var gulpImagemin = require('gulp-imagemin');

module.exports.task = function(gulp, paths) {
	return function app_images() {
    return gulp.src(paths.app.images)
      .pipe(gulpImagemin())
      .pipe(gulp.dest(config.destDir + '/assets/img/'))
      .pipe(gulpConnect.reload());
  }
}
