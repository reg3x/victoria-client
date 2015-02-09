var vicApp = angular.module('CatalogCtrl', [ ]); 


vicApp.controller('CatalogCtrl', ['$http', '$scope','$routeParams', 'pantyService','brasierService','leggingService',
                      'creamService','butterService','fraganceService', 'allService', 'localStorageService', '$location',
                      function ($http, $scope, $routeParams, pantyService,brasierService, leggingService,
                                 creamService, butterService, fraganceService, allService, localStorageService,
                                  $location) {

                          console.dir('parameter provided: '+ $routeParams.section);
                          var options = ['panty', 'brasier','legging', 'cream','butter', 'fragance', 'all'];
                          
                        
                          $scope.addToCart = function (item) {
                              console.log('item: '+item);
                              var queries = localStorageService.get('items') || [];
                              queries.push(item);
                              console.log('queries: '+queries);
                              localStorageService.set('items', queries);
                              alert('Se ha agregado a su carro el producto '+item.name);
                          };

                          
                          if (typeof $routeParams.section === 'undefined') {
                              $location.path('/catalog/all');
                            }
                          
                          else if ($.inArray($routeParams.section, options) >-1 ) {
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
                          }
                          else { 
                              $location.path('/catalog/all');
                          } 
                      }]);
                  