define([], function(){
	function cartCtrl($scope){
        $scope.isAllSelected = false;
        $scope.sizes = [
            {title: "90CM"},
            {title: "100CM"},
            {title: "110CM"}
        ];

        var addCartSubscription = postal.subscribe({
            channel: "cart",
            topic: "add",
            callback: function(data, envelope) {
                console.log("add");
            }
        });

		$scope.items = [
            {
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: $scope.sizes[1],
                count: 2,
                price: 39,
                selected: true
		    },{
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: $scope.sizes[1],
                count: 2,
                price: 39,
                selected: true
		    },{
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: $scope.sizes[1],
                count: 2,
                price: 39,
                selected: true
		    },{
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: $scope.sizes[1],
                count: 2,
                price: 39,
                selected: true
		    },{
                img: "imgs/thirt.png",
                title: "越急越要穿",
                color: "green",
                size: $scope.sizes[1],
                count: 2,
                price: 39,
                selected: true
		    }
        ];

        $scope.selectAll = function() {
            _.map($scope.items, function(item) {
                item.selected = $scope.isAllSelected;
            });
        };

        $scope.doAllSelectedCheck = function() {
            var isAllSelected = true;
            _.map($scope.items, function(item) {
                if (isAllSelected && !item.selected) {
                    isAllSelected = false;
                }
            });
            $scope.isAllSelected = isAllSelected;
        };

        $scope.deleteItem = function(item) {
            $scope.items = _.without($scope.items, item);
        };

        $scope.getTotalCount = function() {
            var count = 0;
            _.map($scope.items, function(item) {
                item.selected && (count += item.count);
            });
            return count;
        };

        $scope.getTotalPrice = function() {
            var price = 0;
            _.map($scope.items, function(item) {
                item.selected && (price += (item.count * item.price));
            });
            return price;
        };

        (function() {
            $scope.doAllSelectedCheck();
        })();
	}
    cartCtrl.$inject = ['$scope'];
	return cartCtrl;
});