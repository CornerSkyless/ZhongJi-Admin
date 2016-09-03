/**
 * Created by CornerSkyless on 16/9/4.
 */
(function () {
    'use strict';
    angular.module('zhongJiApp',['ui.router']);
})();
(function () {
    'use strict';

    angular.module('zhongJiApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/404");
        $stateProvider
            .state("404", {
                url: "/404",
                templateUrl: "views/404.html"
            });
    });
})();
