define([], function() {
    var designDetailCtrl = function($scope) {
        console.log("aa");
        $scope.statuses = [
            {status: 0, name: "待定价"},
            {status: 1, name: "待支付"},
            {status: 2, name: "生产中"},
            {status: 3, name: "已发货"}
        ];

        $scope.items = [
            {
                type: "默认分组",
                phone: "1866804293",
                name: "测试者",
                style: "POLO",
                color: "白色",
                size: "尺码" ,
                selected: true
            }, {
                type: "默认分组",
                phone: "1866804293",
                name: "测试者",
                style: "POLO",
                color: "白色",
                size: "尺码"  ,
                selected: true
            }, {
                type: "默认分组",
                phone: "1866804293",
                name: "测试者",
                style: "POLO",
                color: "白色",
                size: "尺码" ,
                selected: false
            }
        ];

        $scope.action = {
            selectAll: true,
            reverse: true,
            bulkAdd: true,
            bulkDelete: true
        };

    };
    designDetailCtrl.$inject = ['$scope'];
    return designDetailCtrl;
});