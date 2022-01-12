import React,{useState} from 'react'
import style from '../styles/SearchBar.module.css'

function SearchBar({onSearch}){

    const [city, setCity] = useState("")

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSearch(city)
            setCity("")
            console.log(city)
        }}>
        <div className={style.container}>
        <input value={city}
        type='text'
        placeholder='Buscar aquí'
        onChange={(e)=>setCity(e.target.value)}
        />
        <button>Search</button>
        </div>
        </form>
    )
}

export default SearchBar