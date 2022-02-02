import hamburguerMenu from "./hamburguer.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn", ".panel", ".menu a")
});
