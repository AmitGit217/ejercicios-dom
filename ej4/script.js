/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const body = document.querySelector("body")


const button = document.createElement(`button`)
button.id = "btnToClick"
body.appendChild(button)
button.addEventListener(`click`, () => {
   console.log({button});
})


const inputFocus = body.querySelector(`input.focus`)
inputFocus.addEventListener(`focus`,  () => {
   console.log(inputFocus.value);
}) 


const inputFocus2 = body.querySelector(`input.value`)
inputFocus2.addEventListener(`input`,  () => {
   console.log(inputFocus2.value);
}) 