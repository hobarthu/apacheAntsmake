define([], function() {
    var sampleDetailCtrl = function($scope) {
        $scope.clothObj = {
            sides: [
                {id: 0, img: "imgs/transparent/coolpass-r/front.png"},
                {id: 1, img: "imgs/transparent/coolpass-r/back.png"},
                {id: 2, img: "imgs/transparent/coolpass-r/right-side.png"},
                {id: 3, img: "imgs/transparent/coolpass-r/left-side.png"}
            ],
            type: "圆领短袖T恤",
            title: "纯棉舒适款",
            price: "40元",
            colors: [
                {"background-color": "gray"},
                {"background-color": "green"},
                {"background-color": "black"},
                {"background-color": "blue"},
                {"background-color": "red"}
            ],
            sizeList: ["100CM", "110CM", "120CM"],
            minCount: 1,
            maxCount: 3
        };

        $scope.selectedColorStyle = $scope.clothObj.colors[0];
        $scope.selectedSide = $scope.clothObj.sides[0];

        $scope.selectColor = function(color) {
            $scope.selectedColorStyle = color;
        };

        $scope.selectSide = function(side) {
            $scope.selectedSide = side;
        };

        (function() {
            $scope.selectedSize = $scope.clothObj.sizeList[0];
            $scope.selectedNum = 1;
        })();
    };
    sampleDetailCtrl.$inject = ['$scope'];
    return sampleDetailCtrl;
});
