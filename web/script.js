// Plocka ut ett element ur DOM: section, button
// Lägg till en event handler till button
// ... som ändrar CSS-klasserna i section

const section = document.querySelector('.color')
const button  = document.querySelector('#colorButton')

// Kontrollera om det lyckats
console.log('Section: ', section);

button.addEventListener('click', () => {
	console.log('Klickade på knappen');
	section.classList.toggle('alternative')
})
