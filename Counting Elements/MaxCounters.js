function solution(N, A) {
  const countersArray = new Array(N + 1).fill(0);
  let currrentMaxCounter = 0;
  let currentAllCounter = 0;

  //iterating through array A
  A.forEach((element, i) => {

    //check whether any value in countersArray is less than the current All value
    //benefit of that is the counter is keeping the currentAllvalue + if there is a increase on counter[element]
    if (countersArray[element] < currentAllCounter) {
      countersArray[element] = currentAllCounter;
    }
    //checking whether the current Array element is greater than N or not
    //if  greater, then update the currentAllCounter with the currentMaxCounter value
    if (element > N) {
      currentAllCounter = currrentMaxCounter;
    }
    //else increase countersArray of element by one
    else {
      countersArray[element]++;
      currrentMaxCounter = Math.max(currrentMaxCounter, countersArray[A[i]]);
    }
  });

  //if any position of counter is not mentioned in the array A, then this operation will update that position with currentAllCounter value
  countersArray.forEach((value, index) => {
    if (value < currentAllCounter) {
      countersArray[index] = currentAllCounter;
    }
  })

  return countersArray.slice(1);;

}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
