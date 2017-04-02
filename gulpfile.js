var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('stylus', function(){
  gulp.src('style.styl')
  .pipe(stylus({
    compress: false
  }))
  .pipe(gulp.dest('build'))
});

//Todas as tarefas
//gulp.task('build', ['stylus', 'angular'])
