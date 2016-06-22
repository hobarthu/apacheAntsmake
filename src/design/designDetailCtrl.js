define([], function() {
    var designDetailCtrl = function($scope) {
        console.log("aa");
        $scope.statuses = [
            {status: 0, name: "待定价"},
            {status: 1, name: "待支付"},
            {status: 2, name: "生产中"},
            {status: 3, name: "已发货"}
        ];
    };
    designDetailCtrl.$inject = ['$scope'];
    return designDetailCtrl;
});