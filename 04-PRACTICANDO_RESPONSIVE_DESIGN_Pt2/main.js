window.onresize = screen;
window.onload = screen;

//Esta función lo que hace es mostrar los pixeles del ancho de mi pagina, esto lo use para practicar el responsive design
function screen(){
    myWidth = window.innerWidth;
    document.getElementById('size').innerHTML = "Width : " + myWidth + "px";
}