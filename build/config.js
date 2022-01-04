const rootDir = '../' // Root dir
const srcDir = '../src' // Source files
const destDir = '../dist' // Build destination
const npmDir = '../node_modules' // Npm dir

const config = {
  rootDir,
  srcDir,
  destDir,
  npmDir,
  port: 4000,
  paths: {}
}

// Vendor libs paths
config.paths.vendor = {
  scripts: [
    `${npmDir}/@popperjs/core/dist/umd/popper.min.js`,
    `${npmDir}/bootstrap/dist/js/bootstrap.min.js`
  ],
  styles: [
    `${npmDir}/font-awesome/css/font-awesome.min.css`,
    `${npmDir}/bootstrap/dist/css/bootstrap.min.css`
  ],
  fonts: [
    `${npmDir}/font-awesome/fonts/*`
  ]
}

// Application Paths
config.paths.app = {
  scripts: [
    `${srcDir}/js/*.js`
  ],
  styles: [
    `${srcDir}/scss/*.scss`,
    `${srcDir}/scss/**/*.scss`
  ],
  fonts: [],
  templates: [
    `${srcDir}/*.html`,
    `${srcDir}/**/*.html`
  ],
  images: [
    `${srcDir}/img/*`,
    `${srcDir}/img/**/*`,
    `${srcDir}/img/**/**/*`
  ]
}

module.exports = { config }
