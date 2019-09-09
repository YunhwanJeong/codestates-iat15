if(typeof window === 'undefined') {
  var multiplicativePersistence = require('../src/multiplicativePersistence');
  var expect = require('chai').expect;
}

describe('multiplicativePersistence', function() {

  it('234를 인자로 넘길 경우 8을 리턴해야 합니다', function() {
    expect(multiplicativePersistence(234)).to.be.eql(8);
  });

  it('786를 인자로 넘길 경우 0을 리턴해야 합니다', function() {
    expect(multiplicativePersistence(786)).to.be.eql(0)
  });

  it('2248을 인자로 넘길 경우 6을 리턴해야 합니다', function() {
    expect(multiplicativePersistence(2248)).to.be.eql(6);
  });

  it('2300을 인자로 넘길 경우 0을 리턴햐야 합니다', function() {
    expect(multiplicativePersistence(2300)).to.be.eql(0);
  });
});