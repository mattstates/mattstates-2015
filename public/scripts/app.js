var msPort = angular.module('mattstatesPortfolio', []);

msPort.controller('mainController', function($scope, $http) {
    $http({
        method: 'GET',
        url: '/api'
    }).then(function successCallback(response) {
        $scope.projects = response.data;
  }, function errorCallback(response) {
        console.log('There was an error retrieving data.');
  });
    
    $scope.name = 'Matt States';
});

msPort.directive('msprojectElement', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/assets/directives/projects.html'
    }
});

console.log('Thanks for checking out my site.\nI am always looking for constructive criticism so feel free to drop me a line at matt@mattstates.com')

