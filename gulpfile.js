const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const html = require('gulp-htmlmin');
 
// Basic usage:
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });

});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest("src/css"))
            .pipe(rename({prefix: "", suffix: ".min"}))
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles"));
    gulp.watch("src/*.html").on('change', browserSync.reload);
    gulp.watch("src/css/*.*").on('change', browserSync.reload);
    gulp.watch("js/*.*").on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));