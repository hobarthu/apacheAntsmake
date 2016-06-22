define([], function(){
	function designCtrl($scope, $state){
		var statuses = [{
				code: 0,
				title: "定价中"
			}, {
				code: 1,
				title: "待支付"
			}, {
				code: 2,
				title: "生产中"
			}, {
				code: 3,
				title: "已发货"
			}, {
				code: 4,
				title: "待完善"
			}];

		$scope.designs = [{
            id: 0,
			status: 0,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
            id: 1,
			status: 1,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
            id: 2,
			status: 2,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
            id: 3,
			status: 3,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
            id: 4,
			status: 4,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}];
		$scope.designs.forEach(function(d){
			for(var i = 0; i < statuses.length; i++){
				var theStatus = statuses[i];
				if(theStatus.code == d.status){
					d.statusText = theStatus.title;
					break;
				}
			}
		});

        $scope.toDesignDetail = function(id) {
            $state.go("designDetail", {designId: id});
        };

	}
	designCtrl.$inject = ['$scope', "$state"];
	return designCtrl;
});