var vicApp = angular.module('vicApp', [
    'ngResource',
    'ngRoute',
    'homeDirectives',
    'CatalogCtrl',
    'CartCtrl',
    'vicServices',
    'LocalStorageModule'
]);


vicApp.directive('navbar', function () {
    return {
        'restrict': 'E',
        'templateUrl': 'components/navbar/navbar.html'
    };
});


vicApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '/components/home/home.html'
        }).
        when('/catalog/', {
            templateUrl: '/components/catalog/catalog.html',
            controller: 'CatalogCtrl'
        }).
        when('/catalog/:section', {
            templateUrl: '/components/catalog/catalog.html',
            controller: 'CatalogCtrl'
        }).
        when('/cart/', {
            templateUrl: '/components/cart/cart.html',
            controller: 'CartCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
} ]);


vicApp.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('vicApp')
        //.setStorageType('localStorage')
        .setNotify(true, true)
});
