var vicApp = angular.module('CartCtrl', [ ]);

vicApp.controller('CartCtrl', ['$http', '$scope', function($http, $scope){
        
            $http.get('/components/cart/cart.json').
            success(function(data) {
                console.log("cart.json loaded successfuly");
                $scope.product = data;
            }).
            error(function () {
                console.log("cart.json NOT loaded successfuly");
            });
}]);