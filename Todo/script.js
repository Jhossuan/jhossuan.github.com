const d = document,
      form = d.querySelector(".form"),
      input_titulo = d.querySelector(".titulo"),
      input_descripcion = d.querySelector(".descripcion"),
      container_cards = d.querySelector('.container-cards');

function removeError(){
    setTimeout(()=>{
        d.querySelector(".error").classList.remove('is-active');
        },2000)
}

function addCard(titulo, descripcion){
    const cards = d.createElement('div');
    cards.className = "cards";

    const card = d.createElement('div');
    card.className = "card";

    const delete_btn = d.createElement('div');
    delete_btn.className = "delete_btn";
    const img = d.createElement('img');
    img.setAttribute('src','./imagenes/remove.png');
    img.setAttribute('alt','delete-btn');
    img.addEventListener('click',deleteCard)

    const name_card = d.createElement('div');
    name_card.className = "name_card";

    const span = d.createElement('span');
    span.innerHTML = titulo;

    const description_card = d.createElement('div');
    description_card.className = "description_card";
    
    const p = d.createElement('p');
    p.innerHTML = descripcion;

     cards.appendChild(card);
     delete_btn.appendChild(img)
     card.appendChild(delete_btn);
     name_card.appendChild(span)
     card.appendChild(name_card);
     description_card.appendChild(p)
     card.appendChild(description_card)
     container_cards.appendChild(cards);

    //  console.log(cards)
}

function deleteCard(e){
    if(window.confirm("Acepta, si quieres eliminar la tarea")){
        let ancestor = get_ancestor(e.target, 3)
        const cardsx = d.querySelector('.cards')
        cardsx.remove(ancestor)
    }
    
}

function get_ancestor(ancestor, level){
    if(level !== 0){
        return ancestor;
    }
    level--;
    return get_ancestor(ancestor.parentElement, level)
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(input_titulo.value === null || input_titulo.value === ""){
        console.log("Añade un titulo...")
        d.querySelector(".error").classList.add('is-active');
        removeError()
    }else if(input_descripcion.value === null || input_descripcion.value === ""){
        console.log("Llena la descripción...");
        d.querySelector(".error").classList.add('is-active');
        removeError();
    }else{

        let titulo = d.querySelector(".titulo").value;
        let descripcion = d.querySelector(".descripcion").value;

        addCard(titulo, descripcion);
        form.reset();
    }
})