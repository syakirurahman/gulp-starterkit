var config = require('../config');
var gulpConnect = require('gulp-connect');

module.exports.task = function(gulp, paths) {
	return function vendor_fonts() {
		return gulp.src(paths.vendor.fonts)
			.pipe(gulp.dest(config.destDir + "/assets/fonts/"))
			.pipe(gulpConnect.reload())
	};
};
