define(['app/common/services/util/address-service'], function(){
	function addressCtrl($scope, addressService){

		$scope.division = addressService.getDivision();

		$scope.addresses = [{
			consignee: '测试者',
			province: '浙江省',
			city: '宁波市',
			district: '江东区',
			address: '江东北路375号和丰创意广场F幢18L',
			postcode: '315000',
			phone: '18668804293',
			isDefault: 1
		}, {
			consignee: '测试者',
			province: '浙江省',
			city: '宁波市',
			district: '江东区',
			address: '江东北路375号和丰创意广场F幢18L',
			postcode: '315000',
			phone: '18668804293',
			isDefault: 1
		}];

		$scope.edit = function(addr){
			addr.isEdit = true;
		};

		$scope.cancelEdit = function(addr){
			addr.isEdit = false;
		};

		$scope.add = function(){
			$scope.newAddr = {isEdit: true};
		}



	}
	addressCtrl.$inject = ['$scope', 'addressService'];
	return addressCtrl;
});