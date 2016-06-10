define([
	 'app/common/directives/modules',
	 'app/common/services/modules',
	 'app/common/filters/modules',
	 'app/common/layout/modules',
	 'app/common/constants/modules'
], function(){
	 	angular.module('common', ['directives', 'services', 'filters', 'layout', 'constants']);
	 });