/*
2a Bygg ett program som skapar en lista med tre valfria tal och skriver ut deras summa. Valfri metod.

2b Använd en variabel med namnet resultat och lägg till talen till den var för sig.
*/
let list = [1, 20, 300]

console.log(list[0] + list[1] + list[2]);

let resultat = 0
resultat += list[0]
resultat += list[1]
resultat += list[2]
console.log(resultat);

resultat = 0
for( let i=0; i < list.length; i++ ) {
	resultat += list[i]
}
console.log(resultat);

resultat = 0
list.forEach(number => {
	resultat += number
})
console.log(resultat);
