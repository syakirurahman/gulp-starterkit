const { config } = require('../config')
const gulpConnect = require('gulp-connect')
const gulpConcat = require('gulp-concat')

module.exports.task = (gulp, paths) => function appScripts () {
  return gulp.src(paths.app.scripts)
    .pipe(gulpConcat('app.js'))
    .pipe(gulp.dest(`${config.destDir}/assets/js/`))
    .pipe(gulpConnect.reload())
}
