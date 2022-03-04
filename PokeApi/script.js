const d = document;
const cards = d.querySelector(".cards");
const form = d.querySelector('.form');

function fetchPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res)=> res.json())
    .then((data) => addPokemon(data))
    .catch(err => notFound())
}

function addPokemon(data){
    console.log(data)
    const name = d.querySelector('.name');
    name.innerHTML = data.name;
    const id = d.querySelector('.idx');
    id.textContent = `N° ${data.id}`
    const img = d.querySelector('.pokeimg');
    img.setAttribute("src",`${data.sprites.front_default}`)
    const exp = d.querySelector('.exp');
    exp.textContent = `Exp ${data.base_experience}`
}

function notFound(){
    const name = d.querySelector('.name');
    name.textContent = "ERROR";
    const id = d.querySelector('.idx');
    id.textContent = `ERROR`
    const img = d.querySelector('.pokeimg');
    img.setAttribute("src","./imagenes/pokeball.png")
    const exp = d.querySelector('.exp');
    exp.textContent = `ERROR`
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = d.querySelector(".search").value
    if(input === ""){
        notFound()
        console.log('Ejecutandose...')
    }else{
        fetchPokemon(input)
    }
})

