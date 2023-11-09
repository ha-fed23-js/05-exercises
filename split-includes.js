// x.includes(y) - finns y inuti strängen x?
// x.split(separator) - dela en sträng

import { words } from "./data.js"

// console.log(words);

let jazzy = words.filter(string => {
	// Använd console.log när du behöver felsöka
	console.log('Tittar på: ', string);
	return string.includes('jazz')
})
console.log('Jazzy:', jazzy);

// Används startsWith eller endsWith i stället för includes för att hitta ord som matchar början eller slutet av en sträng
let results = words.filter(string => string.toUpperCase().includes('APP'))
console.log('These words contain "app" as a substring: ', results);

function hasWord(string, word) {
	let list = string.split(' ')
	// return list.filter(x => x === word).length
	// return list.some(x => x === word)  // fungerar som ||
	for( let i=0; i<list.length; i++ ) {
		if( list[i] === word ) {
			return true
		}
	}
	return false
}
results = words.filter(string => hasWord(string, 'apple'))
console.log('These words contain "apple" exactly: ', results);
