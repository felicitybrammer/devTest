export function findOutlier(integers: number[]): number {
  // to search for an outlier, I want a solution with the least amount of time complexity possible
  // avoid using nested loops, since integers array can be quite large

  //try testing 1 element to see if next is odd or even (add condition to exclude 0)
  // if two odd, find even outlier
  // if two even, find odd outlier

  //or what about sorting into two lists? even and odd
  // then return the list with only one element (exclude 0)
  //which sorting algorithm is least time complex

  //try using quick sort? (this returns one array with evens left odds right

  //tests seem to give the result that 0 is even

  let leftIndex = 0,
    rightIndex = integers.length - 1;

  while (leftIndex < rightIndex) {
    //if integers[leftIndex] is even increment leftIndex
    while (integers[leftIndex] % 2 === 0 && leftIndex < rightIndex) {
      leftIndex++;
    }
    // if integers[rightIndex] is odd decrement rightIndex. this is will group even integers to the left of resulting array
    while (integers[rightIndex] % 2 === 1 && leftIndex < rightIndex) {
      rightIndex--;
    }

    //swap function using a temporary variable
    if (leftIndex < rightIndex) {
      let temp = integers[leftIndex];
      integers[leftIndex] = integers[rightIndex];
      integers[rightIndex] = temp;
      leftIndex++;
      rightIndex--;
    }
  }
  return integers[0] % 2 == 0 && integers[1] % 2 == 0
    ? integers[integers.length - 1]
    : integers[0];
}
// findOutlier([0, 1, 2]); //1
// findOutlier([1, 2, 3]); //2
// findOutlier([2, 6, 8, 10, 3]); //3
// findOutlier([0, 0, 3, 0, 0]); //3
// findOutlier([1, 1, 0, 1, 1]); //0
