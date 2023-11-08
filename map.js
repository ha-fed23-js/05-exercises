let prices = [10, 12, 14, 16, 18]

let halfPrices = []
for( let i=0; i < prices.length; i++ ) {
	let current = prices[i]
	halfPrices.push( current / 2 )
}

console.log('Originalpris:', prices);
console.log('Reapris:     ', halfPrices);

function half(x) {
	return x / 2
}
function map(list, callback) {
	let xs = []
	for (let i = 0; i < list.length; i++) {
		let current = list[i]
		xs.push(callback(current))
	}
	return xs
}
halfPrices = map(prices, half)
console.log('Reapris:     ', halfPrices);

// function add10(x) { return x + 10 }
// const add10 = x => x + 10
let expensive = map(prices, x => x + 10)//add10)
console.log('Lägg på 10:  ', expensive);

expensive = prices.map(x => x + 10)
console.log('Lägg på 10:  ', expensive);
