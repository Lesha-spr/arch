var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var bulkSass = require('gulp-sass-bulk-import');

gulp.task('sass', function () {
    gulp.src('./public/src/app.scss')
        .pipe(bulkSass())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./public/build'));
});

gulp.task('compress', function() {
    var b = browserify({
        entries: 'public/src/app.jsx',
        extensions: ['.jsx'],
        debug: true,
        // defining transforms here will avoid crashing your stream
        transform: [babelify.configure({
            optional: ["es7.decorators"]
        })]
    });

    return b.bundle()
        .pipe(source('./app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
    gulp.watch('./public/src/**/*.js*', ['compress']);
});

gulp.task('build', ['sass', 'compress']);
gulp.task('default', ['sass', 'compress', 'watch']);