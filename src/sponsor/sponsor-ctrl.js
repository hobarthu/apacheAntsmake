define([], function() {
    var sponsorCtrl = function($scope) {
        $scope.tabs = [
            {id: 0, name: "我们是谁", imgPath: "imgs/about-us.png"},
            {id: 2, name: "发起人手册", imgPath: "imgs/sponsor.png"},
            {id: 3, name: "用户协议", imgPath: "imgs/user-agreement.png"},
            {id: 4, name: "信任与安全", imgPath: "imgs/trust.png"}
        ];
    }
    sponsorCtrl.$inject = ['$scope'];
    return sponsorCtrl;
});