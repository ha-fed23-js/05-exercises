const fishList = [
	{ name: "Gädda", habitat: "Sötvatten" },
	{ name: "Lax", habitat: "Sötvatten och saltvatten" },
	{ name: "Torsk", habitat: "Saltvatten" },
	{ name: "Abborre", habitat: "Sötvatten" },
	{ name: "Havsöring", habitat: "Saltvatten" },
	{ name: "Röding", habitat: "Sötvatten" },
	{ name: "Makrill", habitat: "Saltvatten" },
	{ name: "Guldbraxen", habitat: "Sötvatten" },
	{ name: "Sik", habitat: "Sötvatten" },
	{ name: "Bläckfisk", habitat: "Saltvatten" },
	{ name: "Sardin", habitat: "Saltvatten" },
	{ name: "Rödspätta", habitat: "Saltvatten" },
];

// console.log(fishList);

// fishList.forEach(fish => {
// 	console.log(`Fisken är: ${fish.name}.`);
// })

console.log('Sötvattensfiskarna är:');
fishList.forEach(fish => {
	if( fish.habitat === 'Sötvatten' ) {
		console.log(fish.name);
	}
})
const isFreshWater = fish => fish.habitat === 'Sötvatten'
const getName = fish => fish.name
let freshWaterFishes = []
for( let i=0; i < fishList.length; i++ ) {
	const fish = fishList[i]
	if( isFreshWater(fish) ) {
		freshWaterFishes.push(fish)
	}
}

let fishNames = []
for (let i=0; i < freshWaterFishes.length; i++) {
	const fish = freshWaterFishes[i]
	fishNames.push(getName(fish))
}
console.log(fishNames);


let f1 = fishList.filter(isFreshWater)
let f2 = f1.map(getName)
console.log(f2);

console.log( fishList.filter(isFreshWater).map(getName) )
console.log( fishList.filter(fish => fish.habitat === 'Saltvatten').map(getName) )


let found1 = fishList.find(fish => fish.name === 'Torsk')
let found2 = fishList.find(fish => fish.name === 'Ål')
console.log('Torsken tycker bäst om: ' + found1.habitat);
if( found2 ) {
	console.log('Ålen tycker bäst om: ' + found2.habitat);
} else {
	console.log('Det finns ingen ål :(');
}
