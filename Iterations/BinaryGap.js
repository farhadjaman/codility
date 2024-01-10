function solution(N) {
  const binString = N.toString(2);
  let maxGap = 0;
  let zeroCount = 0;
  let flag = false;
  for (let i = 0; i < binString.length; i++) {
    if (flag) {
      if (binString[i] === '1') {
        maxGap = Math.max(maxGap, zeroCount);
        zeroCount = 0;
      }
      else {
        zeroCount++;
      }
    }
    else {
      if (binString[i] === '1') {
        zeroCount = 0
        flag = true;
      }
    }
  }
  return maxGap;
}
