var vicApp = angular.module('cartDirectives', [ ]);

vicApp.directive('cartcontainer', function () {
    return{
        restrict:'E',
        templateUrl: '/components/cart/cart-container.html',
        controller: ['$http', '$scope', function($http, $scope){
        
            $http.get('/components/cart/cart.json').
            success(function(data) {
                console.log("cart.json loaded successfuly");
                $scope.product = data;
            }).
            error(function () {
                console.log("cart.json NOT loaded successfuly");        
            });

        }],
    }
});