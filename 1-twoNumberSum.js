function twoNumberSum(array, targetSum) {
  // Write your code here.
	const finalArray = []
	
	for ( let i = 0; i < array.length - 1; i++) {
		for ( let j = i + 1; j < array.length; j++ ) {
			if ( array[i] + array[j] === targetSum) {
				finalArray.push( array[i])
				finalArray.push( array[ j])
			}
		}
	}
	
	return finalArray
}