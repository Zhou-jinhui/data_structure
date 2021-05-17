function binarySearch(array, target) {
	let lowBound = 0;
	let upBound = array.length - 1;
	
	while (lowBound <= upBound) {
		let midPoint = Math.floor((upBound - lowBound) / 2);
		if (array[midPoint] === target) {
			return midPoint;	
		} else if (array[midPoint] < target){
			lowBound = midPoint;
		} else {
			upBound = midPoint;
		}
	}
	return -1;
}
