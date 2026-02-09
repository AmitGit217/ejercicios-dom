/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.


 */

const body = document.querySelector(`body`)
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement(`ul`)
ul.innerHTML = countries.map(c => `<li>${c}</li>`).join(``)
body.appendChild(ul)

const toRemove = document.querySelectorAll(`.fn-remove-me`)
toRemove.forEach(e => e.remove())


const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divToPrint = body.querySelector(`div[data-function="printHere"]`)
divToPrint.innerHTML = `<ul>
${cars.map(c => `<li>${c}</li>`).join(``
)}
</ul> `


const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];



const anotherDiv = document.createElement(`div`)
anotherDiv.innerHTML = `
 ${countries2.map(c => {
    return `
    <h4>${c.title}</h4> 
    <img src="${c.imgUrl}"/>
    `
 }).join(``)}
`

body.appendChild(anotherDiv)



const divs = body.querySelectorAll(`div`)

const removeBtn = document.createElement(`button`)
removeBtn.innerText = `REMOVE`
removeBtn.addEventListener(`click`, () => {
    removeBtn.parentElement.remove()
})


divs[divs.length - 1].appendChild(removeBtn)


divs.forEach(d => {
    const btn = document.createElement('button');
    btn.innerText = 'REMOVE';
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
    });
    d.appendChild(btn);
});
