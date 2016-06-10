define([], function(){
	function accountCenterCtrl($scope, $state){
		$scope.tabs = [{
			index: 0,
			title: "我的设计",
			state: "account.design"
		}, {
			index: 1,
			title: "我的订单",
			state: "account.order"
		}, {
			index: 2,
			title: "我的发票",
			state: "account.bill"
		}, {
			index: 3,
			title: "我的地址",
			state: "account.address"
		}];

		$scope.changeTab = function(tab){
			for(var i = 0; i < $scope.tabs.length; i++){
				var theTab = $scope.tabs[i];
				if(tab.state == theTab.state){
					$scope.currentTab = theTab;
					break;
				}
			}
			$state.go(tab.state);
		};

		(function(){
			for(var i = 0; i < $scope.tabs.length; i++){
				var theTab = $scope.tabs[i];
				if($state.current.name == theTab.state){
					$scope.currentTab = theTab;
					break;
				}
			}
		})();
	}
	accountCenterCtrl.$inject = ['$scope', '$state'];
	return accountCenterCtrl;
});