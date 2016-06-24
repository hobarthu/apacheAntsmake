define(['app/common/services/resource/resource-common-service', 'app/common/services/passport/passport-service'], function(){
	function homeCtrl($rootScope, $scope, $state, resourceCommonService, passportService){
        $scope.showQrCode = false;
        $scope.designType = "all";

        $scope.toCaseDetail = function(id) {
            $state.go('caseDetail', {caseId: id});
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

        $scope.showMyDesigns = function() {
            var credential = passportService.getCredential();

            if (_.isEmpty(credential)) {
                $rootScope.$broadcast("goToLogin");
            } else {
                var url = baseServiceUrl + "designs";
                resourceCommonService.getEntity(url, {access_token: credential.accessToken}, '').then(function(data) {
                    $scope.designType = "my";
                    $scope.homeData = data.data;
                    console.log($scope.homeData);
                });
            }
        };

        $scope.showAllDesigns = function() {
            var url = baseServiceUrl + "site/index";
            resourceCommonService.getEntity(url, {}, '').then(function(data) {
                $scope.designType = "all";
                $scope.homeData = data.data;
                console.log($scope.homeData);
            });
        };

        (function() {
            $scope.showAllDesigns();
        })();
	}
	homeCtrl.$inject = ['$rootScope', '$scope', '$state', 'resourceCommonService', 'passportService'];
	return homeCtrl;
});