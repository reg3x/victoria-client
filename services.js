vicServices = angular.module('vicServices', [])

.factory('pantyService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/panty');
})

.factory('brasierService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/brasier');
})

.factory('leggingService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/legging');
})

.factory('creamService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/cream');
})

.factory('butterService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/butter');
})

.factory('fraganceService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/fragance');
})

.factory('allService', function ($resource) {
    return $resource('http://127.0.0.1:8000/api/catalog/', {'query': {method: 'GET', isArray: false }});
});