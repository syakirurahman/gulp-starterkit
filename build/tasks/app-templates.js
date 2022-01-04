const { config } = require('../config')
const gulpConnect = require('gulp-connect')

module.exports.task = (gulp, paths) => function appTemplates () {
  return gulp.src(paths.app.templates)
    .pipe(gulp.dest(config.destDir))
    .pipe(gulpConnect.reload())
}
