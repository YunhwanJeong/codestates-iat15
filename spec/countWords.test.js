if(typeof window === 'undefined') {
  var countWords = require('../src/countWords');
  var expect = require('chai').expect;
}

describe('countWords', function() {
  it('객체를 리턴해야 합니다', function() {
    expect(typeof countWords("ask a bunch try a bunch get a bunch")).to.be.equal("object");
  });

  it('단어들의 키 값으로 빈도수가 담긴 객체를 리턴해야 합니다', function() {
    expect(countWords("ask a bunch try a bunch get a bunch")).to.deep.equal({
      ask: 1,
      a: 3,
      bunch: 3,
      try: 1,
      get: 1
    });
  });

  it('빈 문자열을 넘겼을 때는 빈 객체를 리턴해야 합니다', function() {
    expect(countWords("")).to.deep.equal({});
  });
});
