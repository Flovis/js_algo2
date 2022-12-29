function valMinMax(arr) {
  let sum1 = 0
  let sum2 = 0
  let a = 0
  let b = 0
  arr =  arr.sort(function(a,b) {
    
    return (a-b)
    
  });
    // je ne comprends pas
  for(let i = 0; i < 4; i++){
    sum1 += arr[i]
  }
  for(let j = 1; j < 5; j++){ 
    sum2 += arr[j]
  }
  
  a = Math.max(sum2,sum1)
  b = Math.min(sum2,sum1)
  
  return (`${b} ${a}`)

}

function matriceCaree(A) {
  let n = A.length;
  let sum1 = 0;
  let sum2 = 0;
  let dif;

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < A[i].length; j++) {
      //Diagonale principale
      if (i === j) {
        sum1 += A[i][j];
      }
      //Diagonal secondaire
      if (i + 1 === n - (j + 1) + 1) {
        sum2 += A[i][j];
      }
    }
  }
  //difference des diagonale
  return Math.abs(sum1 - sum2)
}


function camelCase(str) {
  let tab = str.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  if(tab.length === 1 && tab[0] === ""){
    return 0;
  }
  return tab.length;
}


function arcadeRank(top_scores, jeu) {

    let count;
    let arrReturn = [];
    // Remove all duplicates in the array
    const removeDuplicates = top_scores.filter(
    (item, index) => top_scores.indexOf(item) === index
  );

  for(let i = 0; i < jeu.length; i++) {
    count = 1;
    for(let j = 0; j < removeDuplicates.length; j++) {
        if(jeu[i] < removeDuplicates[j]) {
            count ++;
        }

    
    }
    
    arrReturn[i] = count;

  }
 
  return arrReturn;

}

module.exports = { valMinMax, matriceCaree, camelCase, arcadeRank };

