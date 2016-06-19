define([], function(){
	function cartCtrl($scope){
        $scope.sizes = [
            {title: "90CM"},
            {title: "100CM"},
            {title: "110CM"}
        ];

		$scope.items = [
            {
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: "100CM",
                count: 2,
                price: 39,
                selected: true
		    },{
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: "100CM",
                count: 2,
                price: 39,
                selected: true
		    }
        ];
	}
    cartCtrl.$inject = ['$scope'];
	return cartCtrl;
});