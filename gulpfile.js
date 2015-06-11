var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('concat', function(){
  gulp.src(['./**/**/*.less','./**/*.less','./*.less', '!./node_modules/**/*.less', '!./concat/**/*.less'])
    .pipe(replace('@{templateLocal}/', ''))
    .pipe(replace('@{templateCommon}', '../../common'))
    .pipe(gulp.dest('concat'));
});

gulp.task('less', function () {
  return gulp.src('./concat/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./concat'));
});

gulp.task('default', ['concat', 'less'])
