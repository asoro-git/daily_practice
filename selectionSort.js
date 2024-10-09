function selectionSort(arry) {
	for (let i = 0; i < arry.length - 1; i++) {
		// i < arry.length - 1 so that you know there is space for j when j == arry.length
		let min = i;
		for (let j = i + 1; j < arry.length; j++) {
			// j = i + 1 to ensure that it is always running 1 more
			if (arry[j] < arry[min]) {
				min = j;
			}
		}
		if (min != i) {
			let temp = arry[i]; // temp needs to be the var you are about to change, in this case if we change i first, set i into temp so you don't lose the value of i
			arry[i] = arry[min]; // simply swap their positions i = min, then next line is min = i
			arry[min] = temp;
		}
		
	}
	console.log(arry);
	return arry;
}

selectionSort([1, 2, 3, 5, 9, 7, 5]);
