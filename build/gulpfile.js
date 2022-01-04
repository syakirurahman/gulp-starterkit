const gulp = require('gulp')
const gulpConnect = require('gulp-connect')

/**
* Configs And Paths
**/
const { config } = require('./config')
const paths = config.paths

const vendorScripts = require('./tasks/vendor-scripts').task(gulp, paths)
const vendorStyles = require('./tasks/vendor-styles').task(gulp, paths)
const vendorFonts = require('./tasks/vendor-fonts').task(gulp, paths)

const appTemplates = require('./tasks/app-templates').task(gulp, paths)
const appScripts = require('./tasks/app-scripts').task(gulp, paths)
const appStyles = require('./tasks/app-styles').task(gulp, paths)
const appImages = require('./tasks/app-images').task(gulp, paths)

gulp.task('server', async () => {
  gulpConnect.server({
    root: config.destDir,
    port: config.port || 3333,
    livereload: true
  })
})

gulp.task('watch', async () => {
  gulp.watch(paths.app.templates, appTemplates)
  gulp.watch(paths.app.scripts, appScripts)
  gulp.watch(paths.app.styles, appStyles)
  gulp.watch(paths.app.images, appImages)
})

gulp.task('run', gulp.series(vendorScripts, vendorStyles, vendorFonts, appScripts, appStyles, appTemplates, appImages, 'watch'))

gulp.task('default', gulp.series('run', 'server'))
