//export 

function isValidWalk(walk) {
    
  //initial check to see if the walk will take exactly ten minutes
    if(walk.length !== 10) {
      console.log(walk.length);
    return false;
  } else {
 // in order to return to the start position, the number of 'n' and 's' elements
 // must be equal, same for 'w' and 'e'
 // create an object that counts the number of each 'n' and 's' element
  const vertCounts = walk.reduce((count, elem) => (count[elem] = count[elem] + 1 || 1, count), {});
  console.log(vertCounts);
  }
  
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']); //true
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //false
isValidWalk(['w']) //false
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //false
