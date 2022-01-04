const { config } = require('../config')
const gulpConnect = require('gulp-connect')
const gulpConcat = require('gulp-concat')

module.exports.task = (gulp, paths) => function vendorStyles () {
  return gulp.src(paths.vendor.styles)
    .pipe(gulpConcat('vendor.min.css'))
    .pipe(gulp.dest(`${config.destDir}/assets/css/`))
    .pipe(gulpConnect.reload())
}
