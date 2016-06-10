define(['app/common/services/passport/api-interceptor'], function(APIInterceptor) {
    function config($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header-with-brand.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/home/home.html',
                        controller: 'homeCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('sponsor', {
                url: '/sponsor',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/sponsor/sponsor.html',
                        controller: 'sponsorCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/sponsor/sponsor.html',
                        controller: 'sponsorCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('get-sample', {
                url: '/get-sample',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/sponsor/sponsor.html',
                        controller: 'sponsorCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('account', {
                url: '/account',
                abstract: true,
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/account-center/account-center.html',
                        controller: 'accountCenterCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    },
                }
            })
            .state('account.design', {
                url: '/account/design',
                views: {
                    accountLayout: {
                        templateUrl: 'src/account-center/design/design.html',
                        controller: 'acDesignCtrl'
                    }
                }
            })
            .state('account.order', {
                url: '/account/order',
                views: {
                    accountLayout: {
                        templateUrl: 'src/account-center/order/order.html',
                        controller: 'acOrderCtrl'
                    }
                }
            })
            .state('account.bill', {
                url: '/account/bill',
                views: {
                    accountLayout: {
                        templateUrl: 'src/account-center/bill/bill.html',
                        controller: 'acBillCtrl'
                    }
                }
            })
            .state('account.address', {
                url: '/account/address',
                views: {
                    accountLayout: {
                        templateUrl: 'src/account-center/address/address.html',
                        controller: 'acAddressCtrl'
                    }
                }
            });
        $httpProvider.interceptors.push(APIInterceptor);
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

    return config;
});
