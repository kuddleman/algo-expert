
// Solution 1 of 2 with WHILE LOOP
const isValidSubsequence = ( array, sequence ) => {

  let arrIdx = 0
  let seqIdx = 0

  while ( arrIdx < array.length && seqIdx < sequence.length ) {
    if ( array[ arrIdx ] === sequence[ seqIdx ]) {
      seqIdx ++
      
    }
    arrIdx ++
  }

  return seqIdx === sequence.length
}

// 0(n) time | 0(1) space


// Solution 2 of 2 WITH FOR LOOP

const isValidSubsequence2 = ( array, sequence ) => {

  let seqIdx = 0

  for ( let i = 0; i < array.length; i++ ) {
    if (seqIdx === sequence.length) {
      return true
    }
    if ( sequence[ sequence ] === array[ i ]) {
       seqIdx ++
    }
  }
  
  return seqIdx === sequence.length
}

const array1 = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence1 = [1, 6, -1, 10]

console.log( isValidSubsequence( array1, sequence1 ) )