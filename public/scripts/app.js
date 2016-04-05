var msPort = angular.module('mattstatesPortfolio', []);

msPort.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

msPort.controller('mainController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $http({
        method: 'GET',
        url: '/api'
    }).then(function successCallback(response) {
                $scope.projects = response.data;
            }, function errorCallback(response) {
                    console.log('There was an error retrieving data.');
                    console.log(response.statusText);
                });
    
    $scope.name = 'Matt States';
}]);

//In Progress//
msPort.controller('navControls', ['$scope', '$location', '$window', '$timeout', function($scope, $location, $window, $timeout) {
    
    $scope.scrollTo = function(viewID) {
        angular.element('body,html').animate({
            scrollTop: angular.element(viewID)[0].offsetTop
        }, 1000, 'swing');
    }
}]);

msPort.directive('msprojectElement', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/assets/directives/projects.html'
    }
});

function removeActive() {
    $('.navbar-left li').removeClass('active');
    $('.navbar-left li > a').blur();
}

$(window).scroll(function() {
    
    setTimeout(function() {
            if(this.scrollY > 100) {
                $('#navbar').fadeIn(1000);
            }
                    
            if(this.scrollY < $('#about').offset().top) {
                removeActive();
                $('.li-home').addClass('active').focus();
            } else if ($(window).scrollTop() + $(window).height() == $(document).height()) {
                removeActive();
                $('.li-contact').addClass('active').focus();
            } else if(this.scrollY < $('#portfolio').offset().top) {
                removeActive();
                $('.li-about').addClass('active');
            } else if(this.scrollY < $('#contact').offset().top) {
                removeActive();
                $('.li-portfolio').addClass('active').focus();
            } 

        }, 200)

});

console.log('Thanks for checking out my site.\nI am always looking for constructive criticism so feel free to drop me a line at matt@mattstates.com');



