/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/

/**pseudo code
 * 
 * -num 입력
 *  -값이 숫자 0인 totalDigits 변수 선언.
 *  -문자로 만들어 변수에 할당.
 *  -split하여 변수에 할당.
 *   -첫 번째 요소가 "-"라면 -> 
 *   -이후에는 loop 돌면서 Number(element) + totalDigits
 * 
 *
 */
function sumDigits(num) {
  let totalDigits = 0;
  let numToString = num.toString();
  let splitedNumArr = numToString.split("");

  if(splitedNumArr[0] === "-") {
    for(let i = 2; i < splitedNumArr.length; i++) {
        totalDigits = totalDigits + Number(splitedNumArr[i]);
    }
    totalDigits = totalDigits - Number(splitedNumArr[1]);
  } else {
    for(let i = 0; i < splitedNumArr.length; i++) {
      totalDigits = totalDigits + Number(splitedNumArr[i]);
    }
  }

  return totalDigits;
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = sumDigits;
}
