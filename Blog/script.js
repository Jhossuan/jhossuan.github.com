/* Pagina web creada por Jhossuan Foad Campos Díaz */ 
/* Fecha de creación: 29 y 1 de Febrero del 2022 */

const d = document;

/************** BURGER MENU ***************/
const burger = d.querySelector('.bars');
burger.addEventListener('click',()=>{
    d.querySelector(".panel").classList.toggle("is-active");
});

const menuLink = d.querySelector(".menu");
menuLink.addEventListener('click',()=>{
    d.querySelector(".panel").classList.remove("is-active")
})


/************** TEMA OSCURO Y CLARO **************/
const btn = d.querySelector(".theme"),
      selectors = d.querySelectorAll("[data-dark]");

let oscuro = "🌙";
let claro = "☀️";

const lightMode = () => {
    selectors.forEach((el)=> el.classList.remove("darkMode"));
    btn.textContent = oscuro;
    btn.title = "Modo oscuro..."
    localStorage.setItem("theme","light");
};

const nightMode = () => {
    selectors.forEach((el)=> el.classList.add("darkMode"));
    btn.textContent = claro;
    btn.title = "Modo claro..."
    localStorage.setItem("theme","dark");
};

btn.addEventListener("click",()=>{
    if(btn.textContent === oscuro){
        nightMode();
    }else{
        lightMode();
    }
});

d.addEventListener("DOMContentLoaded", (e)=>{
    if(localStorage.getItem("theme") === null) localStorage.setItem("theme","light");
    if(localStorage.getItem("theme") === "light") lightMode();
    if(localStorage.getItem("theme") === "dark") nightMode();
})

/************************ CARTA DEL PORTAFOLIO **************************/
//Aquí cree la card de la seccion del portafolio para demostrar mis habilidades y mejorarlas.
const card = d.createElement('div');
const imagen_repo = d.createElement('img');
const titulo_repo = d.createElement('span');
const p_card = d.createElement('p');
const linkCode = d.createElement('a');
const cards_project = d.querySelector('.cards-project');

card.className = 'card';
imagen_repo.setAttribute('src', './imagenes/construccion.jpg');
imagen_repo.setAttribute('alt','construccion');
imagen_repo.className = 'imagen-repo';
titulo_repo.textContent = "Titulo del repo";
p_card.className = "p_card";
p_card.textContent = "Texto describiendo sobre que trata el proyecto...";
linkCode.className = "linkCode";
linkCode.textContent = "Ver Código"
linkCode.setAttribute('href','#');

card.appendChild(imagen_repo);
card.appendChild(titulo_repo);
card.appendChild(p_card);
card.appendChild(linkCode);
cards_project.appendChild(card);
// ******************************FORMULARIO**********************************