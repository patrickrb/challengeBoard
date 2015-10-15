'use strict';

describe('Service: challengeFactory', function () {

  // load the service's module
  beforeEach(module('challengeBoardApp'));

  // instantiate service
  var challengeFactory;
  beforeEach(inject(function (_challengeFactory_) {
    challengeFactory = _challengeFactory_;
  }));

  it('should do something', function () {
    expect(!!challengeFactory).toBe(true);
  });

});
