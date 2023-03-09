export function isValidWalk(walk: string[]) {
  //initial check to see if the walk will take exactly ten minutes
  if (walk.length !== 10) {
    //console.log(walk.length);
    return false;
  } else {
    // in order to return to the start position, the number of 'n' and 's' elements
    // must be equal, same for 'w' and 'e'
    // create an object that counts the number of each element
    // const counts = walk.reduce((count, elem) => (count[elem] = count[elem] + 1 || 1, count), {});

    const counts: any = {};

    walk.forEach((el) => {
      counts[el] = (counts[el] || 0) + 1;
    });
    
    // check for lack of equal numbers of 'n' and 's' or 'w' and 'e'
    if (counts.n !== counts.s || counts.w !== counts.e) {
      return false;
    } else {
      return true;
    }
  }
}

// isValidWalk(['n','s','n','s','n','s','n','s','n','s']); //true
// isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //false
// isValidWalk(['w']) //false
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //false
// isValidWalk(['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'w', 'e']); //true
