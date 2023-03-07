//export 
function isValidWalk(walk) {
    
  //initial check to see if the walk will take exactly ten minutes
    if(walk.length !== 10) {
      //console.log(walk.length);
      console.log('false');
    return false;
  } else {
 // in order to return to the start position, the number of 'n' and 's' elements
 // must be equal, same for 'w' and 'e'
 // create an object that counts the number of each 'n' and 's' element
  // const counts = walk.reduce((count, elem) => (count[elem] = count[elem] + 1 || 1, count), {});
  // console.log(counts);
  
  

  const counts = {};

  walk.forEach(el => {
    counts[el] = (counts[el] || 0) + 1;
  });

  //console.log(counts);

  if(counts.n !== counts.s || counts.w !== counts.e) {
    console.log('fales');
    return false;
  }  else {

  console.log('true');
  return true;
  }
  }
  
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']); //true
isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']) //false
isValidWalk(['w']) //false
isValidWalk(['n','n','n','s','n','s','n','s','n','s']) //false
isValidWalk(['n', 's', 'w', 'e', 'n', 's', 'w', 'e', 'w', 'e']); //true
