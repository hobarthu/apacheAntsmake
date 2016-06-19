define([], function(){
	var caseDetailCtrl = function($scope) {
        $scope.clothObj = {
            sides: [
                {id: 0, smallImgUrl: "imgs/sample/small_front.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 1, smallImgUrl: "imgs/sample/small_back.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 2, smallImgUrl: "imgs/sample/small_right.jpg", bigImgUrl: "imgs/sample/big_img.jpg"},
                {id: 2, smallImgUrl: "imgs/sample/small_left.jpg", bigImgUrl: "imgs/sample/big_img.jpg"}
            ],
            type: "圆领短袖T恤",
            title: "纯棉舒适款"
        };
	};
    caseDetailCtrl.$inject = ['$scope'];
	return caseDetailCtrl;
});