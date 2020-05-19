var path = require('path');

var rootDir = path.resolve("../");					// Root dir
var srcDir = path.resolve("../src");				// Source files
var destDir = path.resolve("../dist");				// Build destination
var npmDir =  path.resolve("../node_modules");		// Npm dir

var config = {
	rootDir: rootDir,
	srcDir: srcDir,
	destDir: destDir,
	npmDir: npmDir,
	port: 4000,
	paths: {}
};

// Vendor libs paths
config.paths.vendor = {
	scripts: [
		npmDir + '/jquery/dist/jquery.min.js',
		npmDir + '/metismenu/dist/metisMenu.min.js',
		npmDir + '/popper.js/dist/umd/popper.min.js',
		npmDir + '/bootstrap/dist/js/bootstrap.min.js',
	],
	styles: [
		npmDir + '/font-awesome/css/font-awesome.min.css',
		npmDir + '/metismenu/dist/metisMenu.min.css',
		npmDir + '/bootstrap/dist/css/bootstrap.min.css',
	],
	fonts: [
		npmDir + '/font-awesome/fonts/*'
	]
};

// Application Paths
config.paths.app = {
	scripts: [
		srcDir + "/js/*.js"
	],
	styles: [
    srcDir + '/scss/*.scss',
    srcDir + '/scss/**/*.scss'
  ],
  fonts: [],
	templates: [
    srcDir + "/*.html",
    srcDir + "/**/*.html"
  ],
  images : [
    srcDir + "/img/*",
    srcDir + "/img/**/*",
    srcDir + "/img/**/**/*"
  ]
};


module.exports = config;
