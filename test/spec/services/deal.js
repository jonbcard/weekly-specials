'use strict';

describe('Service: deal', function () {

  // load the service's module
  beforeEach(module('weeklySpecialsApp'));

  // instantiate service
  var deal;
  beforeEach(inject(function(_deal_) {
    deal = _deal_;
  }));

  it('should do something', function () {
    expect(!!deal).toBe(true);
  });

});
