function solution(A) {
  A.sort();
  let flag = false;
  let answer = -1;
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      i++;
    }
    else {
      flag = true;
      answer = A[i];
    }
  }
  if (!flag)
    answer = A[A.length - 1]
  return answer;
}

console.log(solution([3, 2, 3, 9, 9, 9, 9]))
