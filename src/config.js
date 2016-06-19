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
            .state('caseDetail', {
                url: '/caseDetail/{caseId}',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/case/case-detail.html',
                        controller: 'caseDetailCtrl'
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
                        templateUrl: 'src/about/about.html',
                        controller: 'aboutCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('sample', {
                url: '/sample',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/sample/sample.html',
                        controller: 'sampleCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('sampleDetail', {
                url: '/sample/detail/{sampleId}',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/sample/sample-detail.html',
                        controller: 'sampleDetailCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('account', {
                url: '/account',
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
                    }
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
            })
            .state('myCart', {
                url: '/account/cart',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/account-center/shoppingCart/cart.html',
                        controller: 'acCartCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            })
            .state('design', {
                url: '/design',
                views: {
                    header: {
                        templateUrl: 'src/common/layout/header/header.html',
                        controller: 'headerCtrl'
                    },
                    body: {
                        templateUrl: 'src/design/design.html',
                        controller: 'designCtrl'
                    },
                    footer: {
                        templateUrl: 'src/common/layout/footer/footer.html'
                    }
                }
            });
        $httpProvider.interceptors.push(APIInterceptor);
    }
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];

    return config;
});
