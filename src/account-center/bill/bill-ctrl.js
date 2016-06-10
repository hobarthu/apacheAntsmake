define([], function(){
	function billCtrl($scope, $modal){
		var okModal = $modal({
            scope: $scope,
            templateUrl: 'src/account-center/bill/save-success.html',
            show: false
        });
        $scope.hideModal = function(){
        	okModal.$promise.then(okModal.hide);
        };
		$scope.saveBill = function(form){
			// if(!form.$valid){
			// 	return;
			// }
			okModal.$promise.then(okModal.show);
		}


	}
	billCtrl.$inject = ['$scope', '$modal'];
	return billCtrl;
});