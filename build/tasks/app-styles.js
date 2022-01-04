const { config } = require('../config')
const gulpConnect = require('gulp-connect')
const gulpConcat = require('gulp-concat')
const gulpSass = require('gulp-sass')(require('sass'))

module.exports.task = (gulp, paths) => function appStyles () {
  return gulp.src(paths.app.styles)
    .pipe(gulpConcat('app.scss'))
    .pipe(gulpSass())
    .pipe(gulp.dest(`${config.destDir}/assets/css/`))
    .pipe(gulpConnect.reload())
}
