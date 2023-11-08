/*
1a Bygg ett program som skapar en tom lista och skriver ut den med console.log. Programmet ska även skriva ut listans längd.

1b Modifiera så att programmet lägger till ett tal på position 1 (index 0) och skriver ut listan. Se till att det skriver ut listans längd sist.

1c Ändra så att programmet lägger till ett annat tal på position 4 och skriver ut listan.
*/
let list = []
console.log('Listan är: ', list);

list[0] = 10
console.log('Listan är: ', list);

list[3] = 30
console.log('Listan är: ', list);
console.log('Listan har längden ' + list.length);
