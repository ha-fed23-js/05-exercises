/*
7 "30 dagar har november; april, juni och september. Februari har 28 allen; alla de övriga 31."
Bygg ett program som räknar ut hur många dagar det går på ett år. (Vi förutsätter att det inte är skottår.) Du ska göra två versioner. Räkna först ut antalet dagar med hjälp av variabler och multiplikation. Sedan genom att göra en lista med månadernas dagar, och summera den.
*/
let x30 = 4
let x28 = 1
let x31 = 7
let daysInYear = x30 * 30 + x28 * 28 + x31 * 31
console.log('Dagar på ett år: ', daysInYear);

let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
daysInYear = 0
let y = 0
// Modifierad för att summera 16 månader
for( let i=0; i < 16; i++ ) {
	if( y >= 12 ) {
		y = 0
	}
	daysInYear += days[y]
	y++
}
console.log('Dagar på 16 månader: ', daysInYear);
