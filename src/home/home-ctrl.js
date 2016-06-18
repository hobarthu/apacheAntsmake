define([], function(){
	function homeCtrl($scope, $state){
        $scope.toCaseDetail = function() {
            $state.go('caseDetail', {caseId: 0});
        };
	}
	homeCtrl.$inject = ['$scope', '$state'];
	return homeCtrl;
});