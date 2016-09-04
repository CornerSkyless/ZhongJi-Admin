/**
 * Created by CornerSkyless on 16/9/4.
 */
(function() {
    'use strict';
    angular
        .module('zhongJiApp')
        .controller('orderListCtrl', orderListCtrl);

    orderListCtrl.$inject = ['$log','$http','$state'];
    function orderListCtrl($log,$http,$state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            $log.log('I\'m a line from orderListCtrl.js');
            vm.isLoading = true;
            $http.post(backHost,{method:'listOrder'})
                .success(function (response) {
                    if(response.result){
                        console.log(response);
                       vm.rowCollection = response.list;
                        vm.isLoading = false;

                    }else {
                        console.error(response.errorInfo);
                    }
                })
                .error(function (error) {
                    console.error(error);
                })
        }

        vm.go = function (url,data) {
            $state.go(url,data);
        };

        vm.csv = function () {
            vm.isFinishing = true;
          $http.post(backHost,{method:'csv'})
              .success(function (response) {
                  if(response.result){
                      vm.isFinishing = false;
                      vm.href = fileHost +  response.data.url;
                      vm.isLoading = false;
                      vm.finishCsv = true;

                  }else {
                      console.error(response.errorInfo);
                  }
              })
              .error(function (error) {
                  console.error(error);
              })
        }
    }
})();