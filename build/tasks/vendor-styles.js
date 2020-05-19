var config = require('../config');
var gulpConnect = require('gulp-connect');
var gulpConcat = require('gulp-concat');

module.exports.task = function(gulp, paths) {
	return function vendor_styles() {
		return gulp.src(paths.vendor.styles)
			.pipe(gulpConcat('vendor.min.css'))
			.pipe(gulp.dest(config.destDir + "/assets/css/"))
			.pipe(gulpConnect.reload())
	};
};
