var gulp = require('gulp');
var concat = require('gulp-concat');

var jsFiles = [
    'src/app.js',
    'src/services/http.js',
    'src/services/**/*.js',
    'src/**/*.js'
]
gulp.task('default', function () {
    gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch(jsFiles, ['default']);
});
