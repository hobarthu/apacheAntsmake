define([
	'app/common/layout/header/header-ctrl',
	'app/common/layout/footer/footer-ctrl'], function(headerCtrl, footerCtrl){
	var layout = angular.module('layout', []);
	layout.controller('headerCtrl', headerCtrl);
	layout.controller('footerCtrl', footerCtrl);
});