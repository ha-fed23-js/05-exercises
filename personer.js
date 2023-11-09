let personer = [
	{ firstname: 'Alice', surname: 'Johnson', age: 25, city: 'London' },
	{ firstname: 'Bob', surname: 'Smith', age: 30, city: 'Manchester' },
	{ firstname: 'Charlie', surname: 'Brown', age: 28, city: 'Birmingham' },
	{ firstname: 'David', surname: 'Clark', age: 22, city: 'Liverpool' },
	{ firstname: 'Emma', surname: 'Taylor', age: 35, city: 'Leeds' },
	{ firstname: 'Frank', surname: 'White', age: 27, city: 'Newcastle' },
	{ firstname: 'Grace', surname: 'Anderson', age: 32, city: 'Sheffield' },
	{ firstname: 'Henry', surname: 'Jones', age: 29, city: 'Bristol' },
	{ firstname: 'Ivy', surname: 'Miller', age: 26, city: 'Nottingham' },
	{ firstname: 'Jack', surname: 'Wilson', age: 31, city: 'Liverpool' },
	{ firstname: 'Katie', surname: 'Davis', age: 24, city: 'Oxford' },
	{ firstname: 'Leo', surname: 'Moore', age: 23, city: 'Cambridge' },
	{ firstname: 'Mia', surname: 'Harris', age: 33, city: 'Southampton' },
	{ firstname: 'Nathan', surname: 'Martin', age: 38, city: 'Cardiff' },
	{ firstname: 'Olivia', surname: 'Thomas', age: 34, city: 'Edinburgh' },
	{ firstname: 'Peter', surname: 'Lee', age: 37, city: 'Glasgow' },
	{ firstname: 'Quinn', surname: 'Perez', age: 36, city: 'Belfast' },
	{ firstname: 'Ryan', surname: 'Brown', age: 21, city: 'Coventry' },
	{ firstname: 'Sara', surname: 'Taylor', age: 39, city: 'Aberdeen' },
	{ firstname: 'Tom', surname: 'Johnson', age: 40, city: 'Dundee' }
];

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
