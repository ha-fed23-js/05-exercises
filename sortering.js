import { numbers, personer } from "./data.js";

// Ascending - stigande sorteringsordning
function compareNumbers(a, b) {
	if( a < b ) {
		return -1
	} else if( a > b ) {
		return 1
	} else {  // a === b
		return 0
	}
}
function compareNumbersDesc(a, b) {
	return -compareNumbers(a, b)
}

numbers.sort(compareNumbersDesc)
console.log(numbers);


function firstnameDesc(a, b) {
	if( a.firstname < b.firstname ) {
		return 1
	} else if( a.firstname > b.firstname ) {
		return -1
	} else {
		return 0
	}
	// Alternativ syntax:
	// return (a.firstname < b.firstname) ? 1
	// 	: (a.firstname > b.firstname) ? -1 : 0
}
function surnameAsc(a, b) {
	return (a.surname < b.surname) ? -1
		: (a.surname > b.surname) ? 1 : firstnameDesc(a, b)
}

const p1 = [ ...personer ]
p1.sort(surnameAsc)
console.log(p1.map(p => `${p.firstname} ${p.surname}`));

// 'abc' > 'aardvark'
// 'ggg' < 'ggghhh'