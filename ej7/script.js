const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];


const div = document.querySelector(`div[data-function="printHere"]`)

div.innerHTML = `<ul>
${places.map(p => `<li>${p}</li>`).join(``)}
</ul>`