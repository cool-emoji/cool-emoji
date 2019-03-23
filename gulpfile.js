const gulp = require('gulp');
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const pump = require('pump');

const gulpConfig = {
    paths: {
        scss: `${__dirname}/dev/scss/**/*.scss`,
        scssDest: `${__dirname}/app/assets/css`,
        nunjucks: `${__dirname}/app/views/**/*.njk`,
        govScripts: `${__dirname}/node_modules/govuk_template_jinja/assets/javascripts/**/*.js`,
        govScriptsDest: `${__dirname}/app/assets/scripts`,
        govCss: [`${__dirname}/node_modules/govuk_template_jinja/assets/stylesheets/{fonts-ie8,fonts,govuk-template-ie8,govuk-template-print,govuk-template}.css`, `${__dirname}/node_modules/govuk_template_jinja/assets/stylesheets/**/*.png`, `${__dirname}/node_modules/govuk_template_jinja/assets/stylesheets/**/*.eot`],
        govCssDest: `${__dirname}/app/assets/css`,
    }
};

// Copy images from govuk node_modules
gulp.task('copygovImages', () => {
    return gulp.src(gulpConfig.paths.govImages)
    .pipe(gulp.dest(gulpConfig.paths.govImagesDest));
});

// Copy and minify scripts from govuk node_modules
gulp.task('copygovScripts', (cb) => {
    pump([
    gulp.src(gulpConfig.paths.govScripts),
    gulp.dest(gulpConfig.paths.govScriptsDest)
      ],
      cb
);
});

// Copy css from govuk node_modules
gulp.task('copygovStyles', () => {
    return gulp.src(gulpConfig.paths.govCss)
    .pipe(gulp.dest(gulpConfig.paths.govCssDest));
});

gulp.task('sassBuild', () => {
    return gulp.src(gulpConfig.paths.scss)
    .pipe(sass({outputStyle: 'compressed',
        includePaths: ['node_modules/govuk_frontend_toolkit/stylesheets',
        'node_modules/govuk_template_jinja/assets/stylesheets',
        'node_modules/govuk-elements-sass/public/sass']}).on('error', sass.logError))
        .pipe(gulp.dest(gulpConfig.paths.scssDest));
});

gulp.task('server', () => {
  nodemon({
    script: 'app.js',
    ext: 'js',
  }).on('quit', function() {
    process.exit(0);
  });
});

gulp.task('build', (done) => {
  runSequence('copygovStyles', 'copygovScripts', 'sassBuild', done);
});