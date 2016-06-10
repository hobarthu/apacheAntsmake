define([], function(){
	function designCtrl($scope){
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
			status: 0,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
			status: 1,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
			status: 2,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
			status: 3,
			title: "越急越要穿",
			count: 28,
			totalEstimatePrice: 28,
			currentTotalPrice: 28,
			currentProducePrice: 28,
			producePrice: 28,
			img: "imgs/thirt.png"
		}, {
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

	}
	designCtrl.$inject = ['$scope'];
	return designCtrl;
});