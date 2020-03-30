let gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');
concat = require('gulp-concat');

gulp.task('scss', function() {
    return gulp.src('app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('watch'));