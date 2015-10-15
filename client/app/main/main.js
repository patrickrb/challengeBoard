'use strict';

angular.module('challengeBoardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
            init: function(challengeService) {
                return challengeService.init()
                    .then(function() {
                        //challenges are loaded and ready here
                    })
            }
        }
      });
  });