var vicApp = angular.module('homeDirectives', []);
    
vicApp.directive('carousel', function () {
    return {
        'restrict': 'E',
        'templateUrl': 'components/home/carousel/carousel.html'
    };
});

vicApp.directive('marketing', function () {
    return {
        'restrict': 'E',
        'templateUrl': 'components/home/marketing/marketing.html',
        'controller': ['$scope','$http', function ($scope, $http) {
            $http.get('components/home/marketing/marketing.json').success(function (data) {
                console.log('$http success loading marketing.json');
                $scope.products = data;
            }).error( function(){
                console.log('$http error loading marketing.json');
                }
            );            
            $http.get('components/home/marketing/featurette.json').success(function (data) {
                console.log('$http success loading featurette.json');
                $scope.featurette = data;
            }).error( function(){
                console.log('$http error loading featurette.json');
                }
            );
            $http.get('components/home/carousel/carousel.json').success(function (data) {
                console.log('$http success loading carousel.json');
                $scope.banners = data;
            }).error( function(){
                console.log('$http error loading carousel.json');
                }
            );
        }],
        'controllerAs': 'markets' 
    };

});