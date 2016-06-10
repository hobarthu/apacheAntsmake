define(['app/account-center/account-center-ctrl',
	'app/account-center/design/design-ctrl',
	'app/account-center/order/order-ctrl',
	'app/account-center/bill/bill-ctrl',
	'app/account-center/address/address-ctrl'], function(accountCenterCtrl, acDesignCtrl, acOrderCtrl, acBillCtrl, acAddressCtrl){
	var accountCenter = angular.module('accountCenter', []);
	accountCenter.controller('accountCenterCtrl', accountCenterCtrl);

	accountCenter.controller('acDesignCtrl', acDesignCtrl);
	accountCenter.controller('acOrderCtrl', acOrderCtrl);
	accountCenter.controller('acBillCtrl', acBillCtrl);
	accountCenter.controller('acAddressCtrl', acAddressCtrl);
});