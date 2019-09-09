if(typeof window === 'undefined') {
  var sumDigits = require('../src/sumDigits');
  var expect = require('chai').expect;
}

describe('sumDigits', function() {
  it('숫자를 리턴해야 합니다', function() {
    expect(typeof sumDigits(2002)).to.be.equal('number');
  });
  it('0이 주어졌을 때 0을 리턴해야 합니다', function() {
    expect(sumDigits(0)).to.be.equal(0);
  });
  it('음수가 포함되었을 때도 정확히 계산해야 합니다', function() {
    expect(sumDigits(-2004)).to.be.equal(2);
  });
  it('정확한 값을 계산해야 합니다', function() {
    expect(sumDigits(2002)).to.be.equal(4);
  });
});
