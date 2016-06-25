define(['app/common/services/resource/resource-common-service', 'app/common/services/passport/passport-service'], function() {
    var sampleDetailCtrl = function($scope, passportService, resourceCommonService) {
        $scope.clothObj = {
            sides: [
                {id: 0, img: "imgs/transparent/coolpass-r/front.png"},
                {id: 1, img: "imgs/transparent/coolpass-r/back.png"},
                {id: 2, img: "imgs/transparent/coolpass-r/right-side.png"},
                {id: 3, img: "imgs/transparent/coolpass-r/left-side.png"}
            ],
            type: "圆领短袖T恤",
            title: "纯棉舒适款",
            price: 40,
            colors: [
                {id: 2, name: "灰色", code: "#cccccc", pivot: {goods_id: 1, color_id: 2}},
                {id: 3, name: "黑色", code: "#000000", pivot: {goods_id: 1, color_id: 3}},
                {id: 6, name: "红色", code: "#ff0000", pivot: {goods_id: 1, color_id: 6}}
            ],
            sizeList: ["100CM", "110CM", "120CM"],
            minCount: 1,
            maxCount: 3
        };

        $scope.selectedColor = {
            id: $scope.clothObj.colors[0].id,
            style: {'background-color': $scope.clothObj.colors[0].code}
        };
        $scope.selectedSide = $scope.clothObj.sides[0];

        $scope.showSizeDetail = false;
        $scope.showSizeDetailText = "查看尺码与详情";

        $scope.showSizeDetailToggle = function() {
            $scope.showSizeDetail = !$scope.showSizeDetail;
            $scope.showSizeDetailText = $scope.showSizeDetail ? "隐藏尺码与详情" : "查看尺码与详情";
        };

        $scope.selectColor = function(color) {
            $scope.selectedColor.id = color.id;
            $scope.selectedColor.style['background-color'] = color.code;
        };

        $scope.selectSide = function(side) {
            $scope.selectedSide = side;
        };

        $scope.addToCart = function() {
            console.log("add");
            if (_.isEmpty(passportService.getCredential())) {
                postal.publish({
                    channel: "passport",
                    topic: "login",
                    data: {}
                });
            } else {
//                var url = baseServiceUrl + "designs";
//                resourceCommonService.getEntity(url, {access_token: credential.accessToken}, '').then(function(data) {
//                });
            }
        };

        (function() {
            $scope.selectedSize = $scope.clothObj.sizeList[0];
            $scope.selectedNum = 1;
        })();
    };
    sampleDetailCtrl.$inject = ['$scope', 'passportService', 'resourceCommonService'];
    return sampleDetailCtrl;
});
