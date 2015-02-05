var vicApp = angular.module('CartCtrl', [ ]);

vicApp.controller('CartCtrl', ['$http', '$scope', 'localStorageService', function($http, $scope, localStorageService){
        
    var itemsStored = localStorageService.get('items');
    if (itemsStored){
        console.log('valor almacenado en LocalStorage: '+ itemsStored);
        $scope.product = itemsStored;
    }
    
    $scope.clearStored = function () {
        localStorageService.clearAll();
        alert('Your Cart is now Empty');
        //we should reload the cart web site here
    }
}]);