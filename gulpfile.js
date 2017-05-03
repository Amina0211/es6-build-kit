var gulp = require('gulp');

const gulpPlumber  = require('gulp-plumber');
const gulpBabel     = require('gulp-babel');
const gulpClean     = require('gulp-clean');
const gulpEslint    = require('gulp-eslint');
const gulpOpen      = require('gulp-open');

const os            = require('os');
const runSequence   = require('run-sequence');
const webpack       = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack-config');

// Remove the distribution files
gulp.task('clean', () => {
  return gulp.src('./dist')
    .pipe(gulpPlumber())
    .pipe(gulpClean());
});

// Lint the JavaScript source code. eslintrc.yml from gulp-eslint project.
gulp.task( 'lint', () => {
  return gulp.src( ['./src/js/**/*.js'] )
    .pipe( gulpPlumber() )
    .pipe( gulpEslint( {
      configFile: './eslintrc.yml'
    } ) )
    .pipe( gulpEslint.format() )
    .pipe( gulpEslint.failOnError() )
    .pipe( gulp.dest( './src/js/' ) )
} );

// Bundle the JavaScript.
gulp.task( 'scripts', () => {
  return gulp.src( './src/index' )
    .pipe( gulpPlumber() )
    .pipe( webpackStream( webpackConfig, webpack ) )
    .pipe( gulp.dest( './dist/js/' ) );
} );

// Move source files to distribution directory.
gulp.task( 'copy', () => {
  return gulp.src( ['./src/**/*', '!./src/js/**/*'] )
    .pipe( gulpPlumber() )
    .pipe( gulp.dest( './dist/' ) );
} );

// Open webpage in a web browser.
gulp.task( 'open', () => {
  return gulp.src( './dist/index.html' )
    .pipe( gulpPlumber() )
    .pipe( gulpOpen( { app: _getLocalBrowser() } ) );
} );

// Main task to build source code.
gulp.task( 'build', () => {
  runSequence( 'lint', 'clean', 'scripts', 'copy', 'open' )
} );

// Default task is to run build.
gulp.task('default', ['build']);

function _getLocalBrowser() {
  switch( os.platform() ) {
    case 'linux':
      return 'google-chrome'
    case 'darwin':
      return 'google chrome'
    case 'win32':
      return 'chrome'
    default:
      return 'firefox'
  }
}
