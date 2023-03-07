export function findOutlier(integers: number[]): number {
  // to search for an outlier, I want a solution with the least amount of time complexity possible
  // avoid using nested loops, since integers array can be quite large
  
//try testing 1 element to see if next is odd or even (add condition to exclude 0) 
// if two odd, find even outlier
// if two even, find odd outlier

//or what about sorting into two lists? even and odd
// then return the list with only one element (exclude 0)
//which sorting algorithm is least time complex



  }
  findOutlier([0, 1, 2]); //1
  findOutlier([1, 2, 3]);//2
  findOutlier([2, 6, 8, 10, 3]);//3
  findOutlier([0, 0, 3, 0, 0])//3
  findOutlier([1, 1, 0, 1, 1])//0