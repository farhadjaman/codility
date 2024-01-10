
function solution(A, K) {
  const output = [...A];
  A.forEach((element, index) => {
    const updatedIndex = (index + K) % A.length
    output[updatedIndex] = element;
  });
  return output
}

console.log(solution([], 4));
