var msPort = angular.module('mattstatesPortfolio', []);

msPort.controller('mainController', function($scope, $http, $location) {
    $http({
        method: 'GET',
        url: '/api'
    }).then(function successCallback(response) {
                $scope.projects = response.data;
            }, function errorCallback(response) {
                    console.log('There was an error retrieving data.');
                });
    
    $scope.name = 'Matt States';
    console.log($location)
});

//In Progress//
msPort.controller('navControls', function($scope, $location) {
    $scope.activeArea = function(viewPath) {
        console.log(viewPath, $location.path().indexOf(viewPath));
        console.log(0 == $location.path().indexOf(viewPath));
        //return viewPath === "#" + $location.path();
        return 0 == $location.path().indexOf(viewPath);
    }
})

msPort.directive('msprojectElement', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/assets/directives/projects.html'
    }
});

$(window).scroll(function() {
    
    //console.log(this.scrollY);
    if(this.scrollY > 100) {
        $('#navbar').fadeIn(1000);
    } /*else if (this.scrollY < 201) {
        $('#navbar').fadeOut(500);
    }*/
});


console.log('Thanks for checking out my site.\nI am always looking for constructive criticism so feel free to drop me a line at matt@mattstates.com');



