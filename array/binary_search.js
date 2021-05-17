function binarySearch(array, target) {
	let lowBound = 0;
	let upBound = array.length - 1;
	let midIndex;	
	while (lowBound <= upBound) {
		midIndex = Math.floor((upBound + lowBound) / 2);
		if (array[midIndex] === target) {
			return midIndex;	
		} else if (array[midIndex] < target){
			lowBound = midIndex + 1;
		} else {
			upBound = midIndex - 1;
		}
	}
	return -1;
}

let arr = [1, 3, 5, 7, 9, 33, 66, 88, 100];
console.log(binarySearch(arr, 34));