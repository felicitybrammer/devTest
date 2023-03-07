export function findOutlier(integers: number[]): number {
  // to search for an outlier, I want a solution with the least amount of time complexity possible
  // avoid using nested loops, since integers array can be quite large
  // a set can only store unique values so try converting to set
  let nArray = [...new Set<number>(integers)];

  //return Array.from(arrToSet); //problem: this returns an array but we want a number
  let N = Number(nArray.join(''));
  return N;


  }
  findOutlier([0, 1, 2]); //1
  findOutlier([1, 2, 3]);//2
  findOutlier([2, 6, 8, 10, 3]);//3
  findOutlier([0, 0, 3, 0, 0])//3
  findOutlier([1, 1, 0, 1, 1])//0