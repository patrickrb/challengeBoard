'use strict';

angular.module('challengeBoardApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.challenges = [];

    $http.get('/api/challenges').success(function(challenges) {
      $scope.challenges = challenges;
      socket.syncUpdates('challenge', $scope.challenges);
    });

    $scope.deleteChallenge = function(challenge) {
      $http.delete('/api/challenges/' + challenge._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('challenge');
    });
  });
