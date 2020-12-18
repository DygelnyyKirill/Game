const { src, dest, series } = require("gulp");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cleanCss = require('gulp-clean-css');

function scripts() {
    return src([
        // 'node-modules/jquery/dist/jquery.min.js',
        'appgame/js/script.js',
        'appgame/js/timer.js'
    ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('appgame/js/'))
}

function styles() {
    return src(
        'appgame/style/*.css'
    )
    .pipe(concat('app.min.css'))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(dest('appgame/style/'))
}
function buildcopy() {
    return src([
        'appgame/style/**/*.min.css',
        'appgame/js/**/*.min.js',
        'appgame/**/*.html'
    ])
    .pipe(dest('dist'))
}
exports.scripts = scripts;  
exports.styles = styles;
exports.build = series(styles, scripts, buildcopy);