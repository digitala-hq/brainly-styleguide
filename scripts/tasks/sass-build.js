module.exports = function (gulp, plugins, consts) {
    return function () {
        var sassFilesSrc = plugins.path.join(consts.SRC, 'sass', 'main.scss');

        return gulp.src(sassFilesSrc)
            .pipe(plugins.sass({
                outputStyle: 'compressed',
                includePaths: ['node_modules/']
            })
            .on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions', 'OperaMini >= 5', 'Android >= 4', 'Chrome >= 28', 'Safari >= 7'],
                cascade: false
            }))
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename('style-guide.css'))
            .pipe(gulp.dest(consts.VERSIONED_DIST))
    };
};
