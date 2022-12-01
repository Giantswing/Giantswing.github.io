const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();
const fileinclude = require("gulp-file-include");

function includeHTML() {
  return src(["src/*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@root",
      })
    )
    .pipe(dest("./"));
}

// Sass Task
function scssTask() {
  return src("assets/sass/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("./", { sourcemaps: "." }));
}

/*
// JavaScript Task
function jsTask() {
  return src("app/js/script.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist", { sourcemaps: "." }));
  
}
*/

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch(
    [
      "src/*.html",
      "assets/js/*.js",
      "src/templates/*.html",
      "assets/sass/*.scss",
      "assets/sass/components/*.scss",
      "app/**/*.js",
    ],
    series(includeHTML, scssTask, browsersyncReload)
  );
}

// Default Gulp Task
exports.default = series(includeHTML, scssTask, browsersyncServe, watchTask);
