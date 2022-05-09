const arrNumber = [12, 56, 54, 87, 56, 23, 45, 89, 32, 9, 15, 97, 3];

// let arrDesc = arrNumber.sort( compare(a, b))

let nombres = [4, 2, 5, 1, 3];
nombres.sort((a, b) => a < b);
console.log(nombres);

/* 
const arrNumber = [12.5, 56.2, 54, 87, 56.7, 23, 45, 89, 32.5, 9, 15, 97, 3];
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
		if (!swapped) break;
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



//initial
displayArr(arrNumber, "unsortedArr");

//croissant
let arrAsc = bubbleSortAsc(arrNumber)
displayArr(arrAsc, "sortedArrAsc");

//décroissant
let arrDesc = bubbleSortDesc(arrNumber)
displayArr(arrDesc, "sortedArrDesc");
 */