/*
makeFib 함수를 작성합니다.

makeFib 함수는 클로저의 형태로 작성되며, 리턴된 함수가 호출될 때마다 피보나치 수열을 순차적으로 출력합니다.
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 됩니다.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

이 함수는 recursive 혹은 iterative한 방법 중 어떤 방법으로든 구현할 수 있습니다.

예제
---

var fn = makeFib();
fn(); // 0
fn(); // 1
fn(); // 1
fn(); // 2
fn(); // 3
fn(); // 5

*/

/**pseudo code
 * 
 * recursive하게 구성.
 * fn() === makeFib()()
 * callcount를 이용할 것.
 * 
 */
function makeFib() {
  let callCount = 0;

  function fib(n) {
    if(n < 2) {
      return n;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  }

  return function() {
    callCount++;
    return fib(callCount - 1);
  }
}

if(typeof window === 'undefined') {
  module.exports = makeFib;
}