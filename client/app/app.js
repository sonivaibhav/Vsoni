'use strict';

var vsoniAppApp = angular.module('vsoniAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
]);
vsoniAppApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: '../components/main/main.html',
            controller: 'MainCtrl'
        }).state('about', {
            url: '/about',
            templateUrl: '../components/about/about.html',
            controller:'AboutCtrl'
        }).state('portfolio', {
            url: '/portfolio',
            templateUrl: '../components/portfolio/portfolio.html',
            controller:'PortfolioCtrl'
        }).state('contact', {
            url: '/contact',
            templateUrl: '../components/contact/contact.html'
        }).state('about-me', {
            url: '/about-me',
            templateUrl: '../components/about-me/about-me.html'
        });
    $locationProvider.html5Mode(true);
  });