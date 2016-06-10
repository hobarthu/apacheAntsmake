define([], function() {
    var sampleCtrl = function($scope) {
         $scope.samples = [
             {
                 id: 0,
                 type: 'rNeck',
                 title: '圆领短袖T恤-',
                 clothes: [
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             },
             {
                 id: 0,
                 type: 'vNeck',
                 title: 'V领短袖T恤-',
                 clothes: [
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             },
             {
                 id: 0,
                 type: 'polo',
                 title: 'POLO衫-',
                 clothes: [
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             }
         ];
    };
    sampleCtrl.$inject = ['$scope'];
    return sampleCtrl;
});