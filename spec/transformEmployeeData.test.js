if(typeof window === 'undefined') {
  var sinon = require('sinon');
  var transformEmployeeData = require('../src/transformEmployeeData');
  var expect = require('chai').expect;
}

describe('transformEmployeeData', function() {
  let input;
  beforeEach(function() {
    sinon.spy(Array.prototype,'map');
    sinon.spy(Array.prototype,'reduce');
    input = [
      [
        ['firstName', 'Joe'],
        ['lastName', 'Blow'],
        ['age', 42],
        ['role', 'clerk']
      ],
      [
        ['firstName', 'Mary'],
        ['lastName', 'Jenkins'],
        ['age', 36],
        ['role', 'manager']
      ],
      [
        ['firstName', 'Steve'],
        ['lastName', 'Lee'],
        ['city', 'Seoul'],
        ['favoriteFood', 'noodle']
      ]
    ];
  });

  afterEach(function() {
    Array.prototype.map.restore();
    Array.prototype.reduce.restore();
  });

  it('reduce 함수가 직원 수만큼 호출되어야 합니다', function() {
    transformEmployeeData(input);
    expect(Array.prototype.reduce.callCount).to.equal(input.length);
  });

  it('map 함수가 한번 이상 호출되어야 합니다', function() {
    transformEmployeeData(input);
    expect(Array.prototype.map.called).to.equal(true);
  });

  it('객체들을 포함한 배열을 리턴해야 합니다', function() {
    let output = transformEmployeeData(input);
    expect(typeof output[0]).to.be.equal('object');
    expect(Array.isArray(output)).to.be.equal(true);
  });

  it('직원들의 데이터를 올바르게 변환해야 합니다', function() {
    let output = transformEmployeeData(input);
    let expected = [
      { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
      { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' },
      { firstName: 'Steve', lastName: 'Lee', city: 'Seoul', favoriteFood: 'noodle' }
    ];
    expect(JSON.stringify(expected)).to.be.equal(JSON.stringify(output));
  });
})