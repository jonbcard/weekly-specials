'use strict';

describe('Service: httpWrapper', function () {

  // load the service's module
  beforeEach(module('weeklySpecialsApp'));

  // instantiate service
  var httpWrapper;
  beforeEach(inject(function(_httpWrapper_) {
    httpWrapper = _httpWrapper_;
  }));

  it('should do something', function () {
    expect(!!httpWrapper).toBe(true);
  });

});
