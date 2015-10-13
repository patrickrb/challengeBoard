'use strict';

angular.module('challengeBoardApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.challenge = {};
    console.log('Auth: ', Auth.getCurrentUser());
    $scope.submitChallenge = function() {
      console.log('submitting challenge');
      var currentUser = Auth.getCurrentUser();
        $http.post('/api/challenges', {
          name: $scope.name,
          details: $scope.details,
          user: currentUser.name,
          link: $scope.link,
          difficulty: $scope.difficulty,
          isSolved: false
        }).
        success(function(data) {
          window.location.href = '/'
          return;
        }).
        error(function(err) {
          this.logout();
          return;
        });
    };
  });
