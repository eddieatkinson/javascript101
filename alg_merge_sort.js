var array = [7, 2, 3, 5, 1, 6, 9, 8];
function split(array){
	var right = [];
	var middle = array.length/2;
	right = array.splice(middle);
	if(array.length > 1){
		split(array);
		split(right);
	}else{
		merge(array, right);
		// console.log(array);
		// console.log(right);
	}
	// console.log(right);	
}

split(array);

function merge(leftArray, rightArray){
	var mergedArray = [];
	if(leftArray[0] > rightArray[0]){
		mergedArray = rightArray.concat(leftArray);
	}else{
		mergedArray = leftArray.concat(rightArray);
	}
	console.log(mergedArray);
	// console.log(typeof(mergedArray));
}

// for(let i = 0; i < leftArray.length; i++){
// 	for(let j = 0; j < rightArray.length; i++){
// 		if(leftArray[i] < )
// 	}
// }