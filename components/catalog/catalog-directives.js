var vicApp = angular.module('catalogDirectives', [ ]);

vicApp.directive('catcontainer', function () {
    return{
        restrict : 'E',
        templateUrl: '/components/catalog/catalog-container.html',
        controller : ['$http', '$scope','$routeParams', 'pantyService','brasierService','leggingService',
                      'creamService','butterService','fraganceService', 
                      function ($http, $scope, $routeParams, pantyService,brasierService, leggingService,
                                 creamService, butterService, fraganceService) {
            
            if (typeof $routeParams.section === 'undefined') {
                console.dir('no parameter provided: '+ typeof $routeParams.section);

                $http.get('/components/catalog/all.json').
                success(function(data) {
                    console.log("all.json loaded successfuly");
                    console.log("parameters: "+ $routeParams.section);
                    $scope.product = data;
                }).
                error(function () {
                    console.log("{{$routeParams.section}}.json NOT loaded successfuly");        
                });
                
            }
            else {
                console.dir('parameter provided: '+ $routeParams.section);
                
                
                switch($routeParams.section) {
                    case 'panty':
                        pantyService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                        
                    case 'brasier':
                        brasierService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                        
                    case 'legging':
                        leggingService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                        
                    case 'cream':
                        creamService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                        
                        case 'butter':
                        butterService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                        
                    case 'fragance':
                        fraganceService.query(function (data) {
                              $scope.product = data;
                        });
                        break;
                }
                
                
                
                //added to test REST API
                
                /* --- this code works with the mockup data
                $http.get('/components/catalog/'+$routeParams.section+'.json').
                success(function(data) {
                    console.log($routeParams.section+".json loaded successfuly");
                    console.log("parameters: "+ $routeParams.section);
                    $scope.product = data;
                }).
                error(function () {
                    console.log("{{$routeParams.section}}.json NOT loaded successfuly");        
                });
                */  
            }

        }],
    }
});