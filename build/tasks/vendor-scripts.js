const { config } = require('../config')
const gulpConnect = require('gulp-connect')
const gulpConcat = require('gulp-concat')

module.exports.task = (gulp, paths) => function vendorScripts () {
  return gulp.src(paths.vendor.scripts)
    .pipe(gulpConcat('vendor.min.js'))
    .pipe(gulp.dest(`${config.destDir}/assets/js/`))
    .pipe(gulpConnect.reload())
}
