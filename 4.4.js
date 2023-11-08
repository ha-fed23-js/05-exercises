/*
4 Bygg ett program som har en lista med minst 4 tal. Byt plats på det andra och tredje talet. Skriv ut listan för att se att du har gjort rätt.


*/
let list = [10, 20, 30, 40, 50]

let temp = list[2]
list[2] = list[1]
list[1] = temp
console.log(list);
