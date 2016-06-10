define([
	'app/config',
	'app/common/modules',
	'app/home/modules',
	'app/account-center/modules'
	], function(config){
		var app = angular.module('antsmakeWeb', [
			'ngCookies', 'ngResource', 'ui.router', 'mgcrea.ngStrap',
			'common', 'home', 'accountCenter']);
		app.config(config);
	});