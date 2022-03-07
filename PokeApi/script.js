const d = document;
const cards = d.querySelector(".cards");
const form = d.querySelector('.form');

function fetchPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
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

    d.querySelector('.error').classList.add('is-active-error')
}

function notFound(){
    d.querySelector('.card').classList.add('is-active')
    d.querySelector('.error').classList.remove('is-active-error')
    const spanerror = d.querySelector('.error-span');
    spanerror.textContent = 'Pokémon NO encontrado'
}
function notFoundInput(){
    d.querySelector('.card').classList.add('is-active')
    d.querySelector('.error').classList.remove('is-active-error')
    const spanerror = d.querySelector('.error-span');
    spanerror.textContent = 'NOT Found'
}

d.addEventListener('DOMContentLoaded',()=>{
    d.querySelector('.error').classList.add('is-active-error')
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const input = d.querySelector(".search").value
    if(input === ""){
        notFoundInput()
        console.log('Ejecutandose...')
    }else{
        fetchPokemon(input)
        d.querySelector('.card').classList.remove('is-active')
    }
})



