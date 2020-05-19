var gulp = require('gulp');
var gulpConnect = require('gulp-connect');

/********************************************
*			Configs And Paths
*********************************************/
var config = require('./config');
var paths = config.paths;

const vendor_scripts = require('./tasks/vendor-scripts').task(gulp, paths);
const vendor_styles = require('./tasks/vendor-styles').task(gulp, paths);
const vendor_fonts = require('./tasks/vendor-fonts').task(gulp, paths);

const app_templates = require('./tasks/app-templates').task(gulp, paths);
const app_scripts = require('./tasks/app-scripts').task(gulp, paths);
const app_styles = require('./tasks/app-styles').task(gulp, paths);
const app_images = require('./tasks/app-images').task(gulp, paths);


gulp.task('server', async function () {
  gulpConnect.server({
      root: config.destDir,
      port: config.port || 3333,
      livereload: true
  });
});

gulp.task('watch', async function () {
  gulp.watch(paths.app.templates, app_templates);
  gulp.watch(paths.app.scripts, app_scripts);
  gulp.watch(paths.app.styles, app_styles);
  gulp.watch(paths.app.images, app_images);
});

gulp.task('run', gulp.series(vendor_scripts, vendor_styles, vendor_fonts, app_scripts, app_styles, app_templates, app_images, 'watch'));

gulp.task('default', gulp.series('run', 'server'));