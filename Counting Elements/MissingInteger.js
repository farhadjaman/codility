function solution(A) {

  let maxValue = Math.max(...A);
  let minValue = Math.min(...A);
  if (maxValue <= 0 || minValue > 1) return 1;


  A.sort(function (a, b) { return a - b });
  A.push(A[A.length - 1] + 1);

  //iterating through array A
  for (let i = 0; i < A.length - 1; i++) {

    if (A[i] !== A[i + 1] && A[i] + 1 !== A[i + 1]) {

      if (A[i] <= 0 && A[i + 1] > 1) {
        return 1
      };

      if (A[i] > 0) {
        return A[i] + 1;
      }

    }

  }

  return A[A.length - 1];

}
let A = [1, 1, 5, 6, 2, 3, 10, 11];
console.log(solution(A));
