var vicApp = angular.module('vicApp', [
    'ngResource',
    'ngRoute',
    'vicController',
    'homeDirectives',
    'catalogDirectives',
    'cartDirectives',
    'vicServices',
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
            templateUrl: '/components/catalog/catalog.html'
        }).
        when('/catalog/:section', {
            templateUrl: '/components/catalog/catalog.html'
        }).
        when('/cart/', {
            templateUrl: '/components/cart/cart.html'
        }).
        otherwise({
            redirectTo: '/'
        });
} ]);
