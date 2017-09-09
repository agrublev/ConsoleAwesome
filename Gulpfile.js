var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

gulp.task('compress', function (cb) {
	pump([
			gulp.src('dist/ca.js'),
			uglify({sourceMap: {
				filename: "ca.min.js",
				url: "ca.min.js.map"
			}}),
			gulp.dest('dist')
		],
		cb
	);
});
gulp.task('compressjs', function () {
	gulp.src('dist/ca.js')
	.pipe(uglify())
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest('dist'))
})
