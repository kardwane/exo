let arrNumber = [12, 56, 54, 87, 56, 23, 45, 89, 32, 9, 15, 97, 3];

function bubbleSortAsc(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swapped = true;
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if (swapped !== true) break;
	}
	return arr;
}

function bubbleSortDesc(arr) {
	for (let i = 0; i < arr.length; i++) {
		let swapped = false;
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				swapped = true;
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		if (swapped !== true) break;
	}
	return arr;
}

function displayArr(arr, div) {
	let tabTxt = "";
	arr.forEach((value) => {
		tabTxt += value + " | ";
	});
	console.log(tabTxt);

	document.querySelector("#"+div).innerHTML = tabTxt;
}

//initial
displayArr(arrNumber, "unsortedArr");

//croissant
arrAsc = bubbleSortAsc(arrNumber)
displayArr(arrAsc, "sortedArrAsc");

//décroissant
arrDesc = bubbleSortDesc(arrNumber)
displayArr(arrDesc, "sortedArrDesc");