/*
"countWords" 함수를 작성합니다.

string이 input으로 주어지면, "countWords" 함수는 주어진 문자열의 각 단어들을 키 값으로 갖고 있는 객체를 리턴합니다.
키 값과 더불어, 각 단어의 빈도수를 알아낸 후 값으로 적용합니다.

Notes:
* 만일 빈 문자열이 주어지면, 빈 객체를 리턴해야 합니다.

let output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

/**pseudo code
 *
 * -input 입력
 *  -빈 객체 선언
 *  -input을 split하여 변수에 할당.
 *  -배열 loop 돌면서
 *   -해당 요소가 객체에 존재하지 않으면 값을 1로 프로퍼티 할당
 *   -존재하면 값을 1 증가시키기.
 */
function countWords(input) {
  let countOfWords = {};
  if(input.length === 0) {
    return countOfWords;
  }
  
  let splitedArr = input.split(" ");

  for(let word of splitedArr) {
    if(!countOfWords[word]) {
      countOfWords[word] = 1;
    } else {
      countOfWords[word] = countOfWords[word] + 1;
    }
  }
  return countOfWords;
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = countWords;
}
