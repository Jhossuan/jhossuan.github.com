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
// ******************************************** Sonido al dar click ****************************************************
const panel_btn = d.querySelector('.panel-btn');
panel_btn.addEventListener('click',()=>{
    alert('Sube el volumen')
    let texto = "Feliz cumpleaños, ya te lo he dicho como 10mil veces jajajaja. Espero que hayas leido todo y te haya gustado, y tambien leido todo el texto final jajaja, perdon por este regalo tan chimbo, pero bueno, es lo que hay. besos doctora guapalentina reina, tilina, princesa, tiktoker, aesteric, darkgirl, beibigerl, bitiesiña, keipopsiña, estraikidslover, yossualover. Un momento, ya casi termino. TE AMOOOOOO. Listo, cuidate y disfruta jajajaj"
    const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    hablar(texto);
})

