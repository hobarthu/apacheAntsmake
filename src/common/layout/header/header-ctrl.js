define(['app/common/services/passport/passport-service', 'app/common/services/passport/passport-service', 'app/common/services/util/antscache-service'], function() {

    function headerCtrl($rootScope, $scope, $modal, $state, passportService) {

    	$rootScope.logined = !!passportService.getCredential();

    	$scope.phoneRegExp = "^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$";
    	var formUrl = {
    		'login': 'src/common/layout/header/passport/login-form.html',
    		'register': 'src/common/layout/header/passport/register-form.html',
    		'forgotPwd': 'src/common/layout/header/passport/forgot-pwd-form.html'
    	};
    	$scope.currentFormUrl = null;
    	$scope.form = null;
    	$scope.getPwdResetCodeText = '获取验证码';
    	$scope.getRegisterCodeText = '获取验证码';

        var tab = {
            SPONSOR: {id: 0, name: "sponsor", label: "发起人手册", path: "sponsor"},
            ABOUT: {id: 1, name: "about", label: "关于产品", path: "about"},
            GET_SAMPLE: {id: 2, name: "get-sample", label: "获取样衣", path: "get-sample"}
        };
        $scope.tabs = [tab.SPONSOR, tab.ABOUT, tab.GET_SAMPLE];

        var passportModal = $modal({
            scope: $scope,
            templateUrl: 'src/common/layout/header/passport.html',
            show: false
        });
        $scope.hideModal = function(){
        	passportModal.$promise.then(passportModal.hide);
        };
        $scope.toLogin = function() {
        	$scope.error = null;
        	$scope.form = {};
        	$scope.currentFormUrl = formUrl.login;
            passportModal.$promise.then(passportModal.show);
        };
        $scope.toRegister = function(){
        	$scope.error = null;
        	$scope.form = {};
        	$scope.currentFormUrl = formUrl.register;
        	passportModal.$promise.then(passportModal.show);
        };
        $scope.toForgotPwd = function(){
        	$scope.error = null;
        	$scope.form = {};
        	$scope.currentFormUrl = formUrl.forgotPwd;
        	passportModal.$promise.then(passportModal.show);
        };
        $scope.getRegisterCode = function(phone){
        	passportService.getCode(phone).then(function(res){
        		if(res.errcode == 0){
        			$scope.form.code = res.code;
        		}
        	});
        };
        $scope.getPwdResetCode = function(phone){
        	passportService.getCode(phone).then(function(res){
        		if(res.errcode == 0){
        			$scope.form.code = res.code;
        		}
        	}, function(res){
        		$scope.error = res;
        	});
        };
        $scope.login = function(form){
        	if(form.$invalid){
        		return false;
        	}
        	passportService.login($scope.form.account, $scope.form.password).then(function(res){
        		if(res.access_token && res.refresh_token) {
        			$scope.hideModal();
        			$rootScope.logined = true;

        			passportService.storeCredential({
        				account: $scope.form.account,
        				accessToken: res.access_token,
        				refreshToken: res.refresh_token
        			});
        		} 
        	}, function(res){
        		$scope.error = res;
        	});
        };
        $scope.logout = function(){
        	passportService.removeCredential();
        	$rootScope.logined = false;
            $scope.changeLocation('home');
        };
        $scope.register = function(form){
        	if(form.$invalid){
        		return false;
        	}
        	passportService.register($scope.form.account, $scope.form.password, $scope.form.code).then(function(res){
        		if(res.access_token && res.refresh_token){
        			$scope.hideModal();
        			$rootScope.logined = true;
        			passportService.storeCredential({
        				account: $scope.form.account,
        				accessToken: res.access_token,
        				refreshToken: res.refresh_token
        			});
        		}
        	}, function(res){
        		$scope.error = res;
        	});
        };
        $scope.resetPwd = function(form){
        	if(form.$invalid){
        		return false;
        	}
        	passportService.resetPwd($scope.form.account, $scope.form.code, $scope.form.password).then(function(res){
        		$scope.hideModal();
        		$rootScope.logined = true;
        		// TODO
        	}, function(res){
        		$scope.error = res;
        	});
        };

        $scope.changeLocation = function(state){
            $state.go(state);
        };
    }

    headerCtrl.$inject = ['$rootScope', '$scope', '$modal', '$state', 'passportService'];

    return headerCtrl;

});
