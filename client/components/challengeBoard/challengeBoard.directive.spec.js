'use strict';

describe('Directive: challengeBoard', function () {

  // load the directive's module and view
  beforeEach(module('challengeBoardApp'));
  beforeEach(module('components/challengeBoard/challengeBoard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<challenge-board></challenge-board>');
    element = $compile(element)(scope);
    scope.$apply();
    
    //test to make sure our table is showing up
    expect(element.html()).toContain("Challenges");
  }));
});