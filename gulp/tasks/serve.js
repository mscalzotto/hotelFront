'use strict';

const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('serve', function() {
	gulp.src('./')
		.pipe(webserver({
			host: '0.0.0.0',
			port: 8080,
			path: '/'
    }));
});
