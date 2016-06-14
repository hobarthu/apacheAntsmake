define([], function() {
    var sampleDetailCtrl = function($scope) {
        $scope.clothObj = {
            sides: [
                {id: 0, smallImgUrl: "imgs/sample/small_front.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 1, smallImgUrl: "imgs/sample/small_back.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 2, smallImgUrl: "imgs/sample/small_right.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 2, smallImgUrl: "imgs/sample/small_left.jpg", bigImgUrl: "imgs/sample/big_img.jpg"}
            ],
            type: "圆领短袖T恤",
            title: "纯棉舒适款",
            price: "40元",
            colors: [{"background-color": "gray"}, {"background-color": "white"}, {"background-color": "black"}, {"background-color": "blue"}, {"background-color": "yellow"}],
            sizeList: ["100CM", "110CM", "120CM"],
            numList: [1, 2, 3]
        };

        (function() {
            $scope.selectedSize = $scope.clothObj.sizeList[0];
            $scope.selectedNum = $scope.clothObj.numList[0];
        })();
    };
    sampleDetailCtrl.$inject = ['$scope'];
    return sampleDetailCtrl;
});
