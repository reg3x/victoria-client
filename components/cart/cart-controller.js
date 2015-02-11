var vicApp = angular.module('CartCtrl', [ ]);

vicApp.controller('CartCtrl', ['$http', '$scope', '$route','localStorageService', function($http, $scope, $route, localStorageService){
        
    var itemsStored = localStorageService.get('items');
    if (itemsStored){
        console.log('valor almacenado en LocalStorage: '+ itemsStored);
        $scope.product = itemsStored;
    }
    
    $scope.clearStored = function () {
        localStorageService.clearAll();
        
        
        $('#cartModal')
        .on('show.bs.modal', function (event) {
            var modal = $(this);
            modal.find('.modal-title').text('cart erased ');
            modal.find('.modal-body .content').text('you can go back to catalog.');
        })
        .on('hide.bs.modal', function (event) {
            $route.reload();
        });
                              
        $('#cartModal').modal();    
    }
    
}]);