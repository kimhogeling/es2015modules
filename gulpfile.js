const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const gutil = require('gulp-util')
const source = require('vinyl-source-stream')

/** NOTE: Therre is not uglify stuff here, because it is only some prototypel stuff **/

/**
 * Explanation of what does what:
 *  Babel: Transpile ES6 to ES5 (doesn't handle ES6 modules)
 *  Browserify: Crawls code for dependencies and concats into one file
 *  Babelify: Babel plugin for browserify to include ES6 modules
 */
gulp.task('es6-from-src-to-normal-js-in-public', function() {
    browserify({debug: true})
        .transform(babelify)
        .require('./src/js/allpages.js', { entry: true })
        .bundle()
        .on('error', gutil.log)
        .pipe(source('allpages.js'))
        .pipe(gulp.dest('./public/js'))

    browserify({debug: true})
        .transform(babelify)
        .require('./src/js/productspage.js', { entry: true })
        .bundle()
        .on('error', gutil.log)
        .pipe(source('productspage.js'))
        .pipe(gulp.dest('./public/js'))
})

gulp.task('watch',function() {
    gulp.watch(['./src/js/**/*.js'],['es6-from-src-to-normal-js-in-public'])
})

gulp.task('default', ['es6-from-src-to-normal-js-in-public', 'watch'])
