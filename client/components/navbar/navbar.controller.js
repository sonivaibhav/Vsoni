'use strict';

angular.module('vsoniAppApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
        {'title': 'Home','link': '/'},
        {'title': 'About','link': '/about'},
        {'title': 'Portfolio','link': '/portfolio'},
        {'title': 'Contact','link': '/contact'},
        {'title': 'About-Me','link': '/about-me'}
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });