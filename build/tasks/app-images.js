const { config } = require('../config.js')
const gulpConnect = require('gulp-connect')
const gulpImagemin = require('gulp-imagemin')

module.exports.task = (gulp, paths) => function appImages () {
  return gulp.src(paths.app.images)
    .pipe(gulpImagemin())
    .pipe(gulp.dest(`${config.destDir}/assets/img/`))
    .pipe(gulpConnect.reload())
}
