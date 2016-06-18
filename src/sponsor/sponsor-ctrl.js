define([], function() {
    var sponsorCtrl = function($scope) {
        $scope.tabs = [
            {id: 0, name: "我们是谁", imgPath: "imgs/sponsor/about-us.jpg"},
            {id: 1, name: "发起人手册", imgPath: "imgs/sponsor/sponsor.jpg"},
            {id: 2, name: "用户协议", imgPath: "imgs/sponsor/user-agreement.jpg"},
            {id: 3, name: "信任与安全", imgPath: "imgs/sponsor/trust.jpg"}
        ];
        $scope.activeTab = $scope.tabs[1];

        $scope.changeTab = function(tab) {
            $scope.activeTab = tab;
        };
    };
    sponsorCtrl.$inject = ['$scope'];
    return sponsorCtrl;
});