var vicApp = angular.module('CatalogCtrl', [ ]); 


vicApp.controller('CatalogCtrl', ['$http', '$scope','$routeParams', 'pantyService','brasierService','leggingService',
                      'creamService','butterService','fraganceService', 'allService', 
                      function ($http, $scope, $routeParams, pantyService,brasierService, leggingService,
                                 creamService, butterService, fraganceService, allService) {

                          console.dir('parameter provided: '+ $routeParams.section);
                          var options = ['panty', 'brasier','legging', 'cream','butter', 'fragance', 'all'];
                          
                          if (typeof $routeParams.section === 'undefined') {
                              console.dir('no parameter provided: '+typeof $routeParams.section+' we might redirect to all/');
                            /*  
                                $http.get('/components/catalog/all.json').
                                success(function(data) {
                                    console.log("all.json loaded successfuly");
                                    console.log("parameters: "+ $routeParams.section);
                                    $scope.product = data;
                                }).
                                error(function () {
                                    console.log("{{$routeParams.section}}.json NOT loaded successfuly");        
                                });*/

                            }
                          else if ($.inArray($routeParams.section, options) >-1 ) {
                                console.log('you entered here');
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
                                
                                case 'all':
                                    allService.query(function (data){
                                        $scope.product = data;
                                    });
                                    break;
                                
                                default:
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
                          else { 
                              console.log('invalid route we should redirect here to catalog/'); 
                          } 

        }]);
                  