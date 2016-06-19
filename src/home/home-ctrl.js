define([], function(){
	function homeCtrl($scope, $state){
        (function() {
            $scope.showQrCode = false;
        })();

        $scope.toCaseDetail = function() {
            $state.go('caseDetail', {caseId: 0});
        };

        $scope.onWeChatMouseEnter = function() {
            $scope.showQrCode = true;
        };

        $scope.onWeChatMouseLeave = function() {
            $scope.showQrCode = false;
        };

        $scope.toCart = function() {
            $state.go("myCart");
        };
	}
	homeCtrl.$inject = ['$scope', '$state'];
	return homeCtrl;
});