define(['app/common/services/resource/resource-common-service'], function(){
	function homeCtrl($scope, $state, resourceCommonService){
        $scope.showQrCode = false;
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

        (function() {
            var url = baseServiceUrl + "site/index";
            resourceCommonService.getEntity(url, {}, '').then(function(data) {
                $scope.homeData = data.data;
                console.log($scope.homeData);
            });

        })();
	}
	homeCtrl.$inject = ['$scope', '$state', 'resourceCommonService'];
	return homeCtrl;
});