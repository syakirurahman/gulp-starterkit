const { config } = require('../config')
const gulpConnect = require('gulp-connect')

module.exports.task = (gulp, paths) => () => gulp.src(paths.vendor.fonts)
  .pipe(gulp.dest(`${config.destDir}/assets/fonts/`))
  .pipe(gulpConnect.reload())
