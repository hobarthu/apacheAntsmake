define([
    'app/antsCtrl',
	'app/config',
	'app/common/modules',
	'app/home/modules',
	'app/account-center/modules',
	'app/sponsor/modules',
	'app/about/modules',
	'app/sample/modules',
	'app/design/modules',
	'app/case/modules'
	], function(antsCtrl, config){
		var app = angular.module('antsmakeWeb', [
			'ngCookies', 'ngResource', 'ui.router', 'mgcrea.ngStrap',
			'common', 'home', 'accountCenter', 'sponsor', 'about', 'sample', 'design', 'caseDetail']);
		app.config(config);
        app.controller("antsCtrl", antsCtrl);
	});