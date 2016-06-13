define([], function() {
    var sampleCtrl = function($scope) {
         $scope.samples = [
             {
                 id: 0,
                 type: 'rNeck',
                 title: '圆领短袖T恤-',
                 clothes: [
                     {id: 0, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 1, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 2, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             },
             {
                 id: 1,
                 type: 'vNeck',
                 title: 'V领短袖T恤-',
                 clothes: [
                     {id: 3, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 4, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 5, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             },
             {
                 id: 2,
                 type: 'polo',
                 title: 'POLO衫-',
                 clothes: [
                     {id: 6, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 7, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"},
                     {id: 8, title: "纯棉舒适款", imgPath: "imgs/sample/coolpass-r/front-white.png"}
                 ]
             }
         ];
    };
    sampleCtrl.$inject = ['$scope'];
    return sampleCtrl;
});