define(['app/common/services/resource/resource-common-service', 'app/common/services/util/storage-service'], function() {
    function passportService(resourceCommonService, storageService) {
        var passport = {};
        var credential = null;

        passport.login = function(username, password) {
            var url = baseServiceUrl + "user/login";
            return resourceCommonService.createEntity(url, null, { name: username, password: password }, '登录失败！');
        };

        passport.register = function(username, password, code) {
            var url = baseServiceUrl + "user/register";
            return resourceCommonService.createEntity(url, null, { name: username, password: password, code: code }, '注册失败！');
        };

        passport.getCode = function(phone) {
            var url = baseServiceUrl + "user/code";
            return resourceCommonService.createEntity(url, null, { name: phone }, "获取验证码失败！");
        };

        passport.refreshToken = function(refreshToken) {
            var url = baseServiceUrl + "user/refresh";
            return resourceCommonService.createEntity(url, null, { refresh_token: refreshToken }, "刷新Access Token失败！");
        };

        passport.storeCredential = function(theCredential) {
        	credential = theCredential;
            storageService.put('am-credential', theCredential);
        };

        passport.removeCredential = function(){
        	storageService.remove('am-credential');
        	credential = null;
        };

        passport.getCredential = function(){
        	if(!credential){
        		return credential = storageService.get('am-credential');
        	}
        	return credential;
        };

        return passport;
    }

    passportService.$inject = ['resourceCommonService', 'storageService'];

    angular.module('services').factory('passportService', passportService);

    return passportService;
});
