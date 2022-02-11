const d = document; 

// ************************** Script de bienvenida *************************** \\
alert("Hola, hermosa...");
alert("Feliz cumpleaños...😘")

// ******************************************** Función de las cartas **********************************************************
const form = d.querySelector('.generador');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let nameDeseo = d.querySelector(".nameDeseo").value;
    let descripDeseo = d.querySelector(".descripDeseo").value; 

    addCard(nameDeseo, descripDeseo);
    form.reset();
})


function addCard(nameDeseo, descripDeseo){
    const card = d.createElement('div');
    card.className = "card";

    const h3 = d.createElement('h3');
    h3.textContent = nameDeseo;//Nombre del deseo

    const descrip_deseo = d.createElement('div');
    descrip_deseo.className = "deseo-descripcion";

    const p = d.createElement('p');
    p.textContent = descripDeseo;//Descripcion del deseo

    const small = d.createElement('small');
    small.textContent = "Todos tus deseos se cumpliran si lo crees.🚀"

    const cards = d.querySelector('.cards')

    // Union de todos los elementos para crear una CARD

    card.appendChild(h3);
    card.appendChild(descrip_deseo);
    descrip_deseo.appendChild(p);
    card.appendChild(small);
    cards.appendChild(card);
}
// ******************************************** Temporizador de cumple ****************************************************

