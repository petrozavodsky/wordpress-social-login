const gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    path = require('path');

const plugin_src = {
    lang: {
        src: [
            '**/*.php',
            '!vendor/**/*.php'
        ],
        dest: './languages/',
    }
};


gulp.task('i18n', function () {
    return gulp.src(plugin_src.lang.src)
        .pipe(plugins.sort())
        .pipe(plugins.wpPot({
            package: path.basename(__dirname)
        }))
        .pipe(plugins.rename({
            basename: path.basename(__dirname),
            extname: ".pot"
        }))
        .pipe(gulp.dest(plugin_src.lang.dest));

});

gulp.task('default', ['i18n']);
