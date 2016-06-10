define([], function(){
	function orderCtrl($scope){

		var statuses = [{
				code: 0,
				title: "待支付"
			}, {
				code: 1,
				title: "生产中"
			}, {
				code: 2,
				title: "已发货"
			}, {
				code: 3,
				title: "已完成"
			}, {
				code: 4,
				title: "售后中"
			}, {
				code: 5,
				title: "售后完成"
			}];

		$scope.orders = [{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 0
		},{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 1
		},{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 2
		},{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 3
		},{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 4
		},{
			orderNum: "201404287689",
			createTime: new Date().getTime(),
			img: "imgs/thirt.png",
			title: "越急越要穿",
			count: 28,
			totalPrice: 3900,
			status: 5
		}];
		$scope.orders.forEach(function(o){
			for(var i = 0; i < statuses.length; i++){
				var theStatus = statuses[i];
				if(theStatus.code == o.status){
					o.statusText = theStatus.title;
					break;
				}
			}
		});

	}
	orderCtrl.$inject = ['$scope'];
	return orderCtrl;
});