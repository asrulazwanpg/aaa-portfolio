const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browser-sync', function () 
{
  var files = [
    './**/*.html',
    'css/**/*.css',
    'imgs/**/*.png',
    'js/**/*.js'
  ];

  browserSync.init(files, {
    server: {
      baseDir: './'
    },
    port: 80
  });
});