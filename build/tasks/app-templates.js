var config = require('../config');
var gulpConnect = require('gulp-connect');

module.exports.task = function(gulp, paths) {
	return function app_templates() {
    return gulp.src(paths.app.templates)
      .pipe(gulp.dest(config.destDir))
      .pipe(gulpConnect.reload());
  }
}
