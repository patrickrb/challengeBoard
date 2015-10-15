'use strict';

describe('Service: challengeService', function () {

  // load the service's module
  beforeEach(module('challengeBoardApp'));

  // instantiate service
  var challengeService;
  beforeEach(inject(function (_challengeService_) {
    challengeService = _challengeService_;
  }));

  it('should do something', function () {
    expect(!!challengeService).toBe(true);
  });

});
