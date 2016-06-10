define(['app/common/services/passport/passport-service'], function() {
    function APIInterceptor($q, $rootScope) {

        var errorMap = {
            0: '请求成功',
            10001: '注册失败',
            10002: 'token创建失败',
            10003: '登陆失败',
            10004: 'token认证失败',
            10005: '手机验证码发送失败',
            10006: 'token刷新失败',
            10007: '无操作权限',
            20000: '内容',
            20001: '图片获取失败',
            20002: '图片上传失败',
            30000: '商品',
            30001: '商品获取失败',
            30002: '商品创建失败',
            30003: '商品更新失败',
            31001: '颜色获取失败',
            31002: '颜色创建失败',
            31003: '颜色更新失败',
            31011: '尺寸获取失败',
            31012: '尺寸创建失败',
            31013: '尺寸更新失败',
            31021: '款式获取失败',
            31022: '款式创建失败',
            31023: '款式更新失败',
            40000: '设计',
            50000: '订单'
        };

        return {
            response: function(response) {
                if (response.status == 200) {
                    if (response.data.errcode) {
                        response.data.message = errorMap[response.data.errcode];
                        return $q.reject(response);
                    }
                    return response;
                }
                return response;
            }
        };
    }

    APIInterceptor.$inject = ['$q', '$rootScope'];

    return APIInterceptor;
});
