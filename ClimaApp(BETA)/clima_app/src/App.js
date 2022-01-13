import React, { useState } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Cards from './components/Cards.jsx'
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Ciudad from './components/Ciudad.jsx';
import Cv from './components/Cv'


export default function App() {

  const [cities, setCities] = useState([])
  const apiKey = '1376285e8622bd71d2a428e476689b38'

  function onSearch(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(resource => {
      if(resource.main !== undefined){
        const city = {
          min: Math.round(resource.main.temp_min),
            max: Math.round(resource.main.temp_max),
            img: resource.weather[0].icon,
            id: resource.id,
            wind: resource.wind.speed,
            temp: resource.main.temp,
            name: resource.name,
            weather: resource.weather[0].main,
            clouds: resource.clouds.all,
            latitud: resource.coord.lat,
            longitud: resource.coord.lon
        }
        setCities(oldCities=>[...oldCities, city]);
        console.log(city)
      }
      else{
        alert('Ciudad no disponible')
      }
    })
  }

  function onClose(id){
    setCities(oldCities=>oldCities.filter(c => c.id != id))
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Routes>
      
      <Route path='/' element={<Cards cities={cities} onClose={onClose}/>}/>
      
      <Route path='/about' element={<About/>} />
      
      <Route path='/cv' element={<Cv/>} />
      
      <Route path='/ciudad/:id' element={<Ciudad/>}/>
        
      </Routes>
    </div>
  );
}


