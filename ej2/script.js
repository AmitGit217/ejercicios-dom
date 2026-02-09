
/*  1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.

1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here
    
    */

const body = document.querySelector(`body`)
const div = document.createElement('div');

body.appendChild(div)

const div2 = document.createElement('div');
div2.innerHTML = `<p></p>`

body.appendChild(div2)

const div3 = document.createElement('div');
const arr = new Array(6).fill(6);
div3.innerHTML = arr.map(n => `<p></p>`).join('');

body.appendChild(div3)


const div4 = document.createElement('div');
div4.innerHTML = `<p>Soy dinámico!</p>`

body.appendChild(div4)


const h2ToChange = document.querySelector(`h2.fn-insert-here`)
h2ToChange.textContent = `Wubba Lubba dub dub`


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement(`ul`)
ul.innerHTML = apps.map(n => `<li>${n}</li>`).join('');
body.appendChild(ul)

document.querySelectorAll('.fn-remove-me')
  .forEach(el => el.remove());


const parentDiv = document.querySelector('div');

const p = document.createElement('p');
p.textContent = 'Voy en medio!';

parentDiv.after(p);


const parentDiv2 = document.querySelector('div.fn-insert-here');
const p2 = document.createElement('p');
p2.textContent = 'Voy en Dentro!';

parentDiv2.after(p2);
