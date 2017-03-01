'use strict';

let config = {
	path: {
		server_index: 'app',
		bower: '/bower_components',
		html: 'app/**/*.html',
		images: 'app/images/**/*',
		less: 'app/styles/main.less',
		styles: 'app/styles',
		extra: [
			'app/*.*',
			'!app/*.html',
		],
		watch: [
			'app/**/*.html',
			'.tmp/styles/**/*.css',
			'app/scripts/**/*.js',
			'app/images/**/*'
		],
		jshint: ['app/scripts/**/*.js','!app/scripts/libs/**/*.js']
	},
	url: 'http://0.0.0.0',
	livereload_port: 35729,
	port: 8080,
};

module.exports = config;
