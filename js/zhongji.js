/**
 * Created by CornerSkyless on 16/9/4.
 */
(function () {
    'use strict';
    angular.module('zhongJiApp',['ui.router','smart-table']);
})();
(function () {
    'use strict';

    angular.module('zhongJiApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/404");
        $stateProvider
            .state("404", {
                url: "/404",
                templateUrl: "views/404.html"
            })
            .state("orderList", {
                url: "/orderList",
                templateUrl: "views/orderList.html"
            })
            .state("orderDetail", {
                url: "/orderDetail/{orderId}",
                templateUrl: "views/orderDetail.html"
            })

    });
})();
(function () {
    'use strict';

    angular.module('zhongJiApp').filter('unique', function() {
    return function (arr, field) {
        var o = {}, i, l = arr.length, r = [];
        for(i=0; i<l;i+=1) {
            o[arr[i][field]] = arr[i];
        }
        for(i in o) {
            r.push(o[i]);
        }
        return r;
    };
})
})();