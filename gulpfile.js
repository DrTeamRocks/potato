'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var named = require('vinyl-named');

gulp.task('default', ['img', 'scss', 'js', 'fonts']);

gulp.task('clean:img', function () {
    return del(['public/assets/img']);
});

gulp.task('img', ['clean:img'], function () {
    return gulp.src('resources/img/**/*')
        .pipe(gulp.dest('public/assets/img'));
});

gulp.task('clean:css', function () {
    return del(['public/assets/css']);
});

gulp.task('scss', ['clean:css'], function () {
    gulp.src(['resources/scss/*.scss'], {base: 'resources/scss/'})
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix('last 3 version'))
        .pipe(minifyCss({processImportFrom: ['!fonts.googleapis.com']}))
        .on('error', gutil.log)
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('clean:fonts', function () {
    return del(['public/assets/fonts']);
});

gulp.task('fonts', ['clean:fonts'], function () {
    gulp
        .src([
            'node_modules/ubuntu-fontface/fonts/*',
            'node_modules/font-awesome/fonts/*'
        ])
        .pipe(gulp.dest('public/assets/fonts/'));
});

gulp.task('clean:js', function () {
    return del(['public/assets/js']);
});

gulp.task('js', ['clean:js'], function () {
    gulp.src(['resources/js/**/*.js'])
        .pipe(named())
        .pipe(uglify())
        .pipe(gulp.dest('public/assets/js'));

    gulp
        .src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/popper.js/dist/umd/popper.min.js'
        ])
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('watch', function () {
    livereload.listen();

    gulp.watch('resources/img/**', ['img']).on('change', livereload.changed);
    gulp.watch('resources/js/**', ['js']).on('change', livereload.changed);
    gulp.watch('resources/sass/**', ['sass']).on('change', livereload.changed);
});
