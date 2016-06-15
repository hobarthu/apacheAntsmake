define([
	'app/config',
	'app/common/modules',
	'app/home/modules',
	'app/account-center/modules',
	'app/sponsor/modules',
	'app/about/modules',
	'app/sample/modules',
	'app/design/modules'
	], function(config){
		var app = angular.module('antsmakeWeb', [
			'ngCookies', 'ngResource', 'ui.router', 'mgcrea.ngStrap',
			'common', 'home', 'accountCenter', 'sponsor', 'about', 'sample', 'design']);
		app.config(config);
	});