/*
"transformEmployeeData" 함수를 작성합니다.

사원들의 정보를 다른 형태로 변형 할 수 있는 함수 "transformEmployeeData" 함수를 작성하세요.
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
];

위의 배열이 input으로 주어진다면, 다음과 같은 output을 리턴해야 합니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];

입력값에는 예시와 다른 키값들이 있을 수도 있고 사원수가 다를 수도 있습니다.

* Constraint: 반드시 Array의 map 메소드와 reduce 메소드를 사용해서 문제를 해결해야 합니다.

*/

/**psedo code
 * 
 * 반드시 map, reduce 활용할 것.
 */

function transformEmployeeData(array) {
  let mapper = function(arr) {
    return arr.reduce(reducer, {});
  }
  let reducer = function(obj, keyValue) {
    obj[keyValue[0]] = keyValue[1];
    return obj;
  }
  let result = array.map(mapper);

  return result;
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = transformEmployeeData;
}
