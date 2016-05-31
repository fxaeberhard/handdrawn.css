var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

var fontName = 'icons',
    iconsPath = 'assets/icons/*.svg';

gulp.task('iconfont', function() {
    gulp.src([iconsPath])
        .pipe($.iconfontCss({
            fontName: fontName,
            path: 'scss/templates/_icons.scss',
            targetPath: '../scss/_icons.scss',
            fontPath: 'fonts/',
        }))
        .pipe($.iconfont({
            fontName: fontName,
            fontHeight: 1001,
            prependUnicode: true,
            formats: ['ttf', 'eot', 'woff'],
            normalize: true
        }))
        .pipe(gulp.dest('fonts/'));
});

// SASS task, will run when any SCSS files change
gulp.task('sass', function() {
    return gulp.src('scss/handdrawn.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass({ errLogToConsole: true, outputStyle: 'expanded' }).on('error', $.sass.logError))
        .pipe($.autoprefixer())
        .pipe($.sourcemaps.write())
        // .pipe(reload({ stream: true }))
        .pipe(gulp.dest('.'))
        .pipe($.cssnano())
        .pipe($.rename('handdrawn.min.css'))
        .pipe(gulp.dest('.'));
});

// default task to be run with `gulp` command
// this default task will use Gulp to watch files.
gulp.task('default', ['sass', 'iconfont' ], function() {
    gulp.watch([iconsPath], ['iconfont']);
    gulp.watch('scss/**/*.scss', ['sass']);
});
