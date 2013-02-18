'use strict';

describe('Service: city', function () {

  // load the service's module
  beforeEach(module('weeklySpecialsApp'));

  // instantiate service
  var city;
  beforeEach(inject(function(_city_) {
    city = _city_;
  }));

  it('should do something', function () {
    expect(!!city).toBe(true);
  });

});
