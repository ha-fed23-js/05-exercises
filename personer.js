import { personer } from "./data.js";

// console.log(personer);
let firstnames = personer.map(user => user.firstname)
console.log(firstnames);

let fullnames = personer.map(user => `${user.firstname} ${user.surname}`)
console.log(fullnames);

let modified = personer.map(user => ({
	fullname: `${user.firstname} ${user.surname}`,
	age: user.age,
	city: user.city,
	country: 'England'
}))
let over30 = modified.filter(user => user.age > 30)
let over30Simpler = over30.map(user => ({
	name: user.fullname,
	age: user.age
}))

console.log(over30Simpler);

// Vilka bor i Liverpool?
// Ge mig första personen som bor i Liverpool
let allLiverpool = modified.filter(player => player.city === 'Liverpool')
console.log(allLiverpool);

let oneFromLiverpool = modified.find(player => player.city === 'Liverpool')
console.log('Found player from Liverpool: ', oneFromLiverpool);
