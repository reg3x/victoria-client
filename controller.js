var vicController = angular.module('vicController', []);

vicController.controller('bodyController', ['$scope', '$http' ,function ($scope, $http) {
    $scope.msg = 'as requested';
}]);