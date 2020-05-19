var config = require('../config');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');

module.exports.task = function(gulp, paths) {
	return function vendor_scripts() {
		return gulp.src(paths.vendor.scripts)
			.pipe(gulpConcat('vendor.min.js'))
			.pipe(gulp.dest(config.destDir + "/assets/js/"))
			.pipe(gulpConnect.reload())
	};
};
