'use strict';

angular.module('challengeBoardApp')
  .directive('challengeBoard', function () {
    return {
      templateUrl: 'components/challengeBoard/challengeBoard.html',
      restrict: 'EA',
      controller: function($scope, challengeService){
      	$scope.challenges = challengeService.challenges;
      },
      link: function (scope, element, attrs) {
      	//Any DOM manipulation should be done here in Link
      }
    };
  });