if(typeof window === 'undefined') {
  var makeFib = require('../src/makeFib');
  var expect = require('chai').expect;
}

describe('makeFib', function() {
  var fn;
  beforeEach(function() {
    fn = makeFib();
  });

  it('함수를 리턴해야 합니다', function() {
    expect(typeof fn).to.be.equal('function');
  });

  it('리턴된 함수를 한번 실행했을 때는 0을 리턴해야 합니다', function() {
    expect(fn()).to.be.equal(0);
  });

  it('리턴된 함수를 두번째 실행했을 때는 1을 리턴해야 합니다', function() {
    fn();
    expect(fn()).to.be.equal(1);
  });

  it('리턴된 함수의 실행 횟수에 따라, 피보나치 수열에서의 인덱스 값을 리턴해야 합니다', function() {
    expect(fn()).to.be.equal(0);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(1);
    expect(fn()).to.be.equal(2);
    expect(fn()).to.be.equal(3);
    expect(fn()).to.be.equal(5);
    expect(fn()).to.be.equal(8);
    expect(fn()).to.be.equal(13);
    expect(fn()).to.be.equal(21);
    expect(fn()).to.be.equal(34);
    expect(fn()).to.be.equal(55);
    expect(fn()).to.be.equal(89);
  });
});