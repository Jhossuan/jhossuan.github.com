import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Card.module.css'

export default function Card({max, min, name, img, onClose, id}){
    return(
        <div className={style.container}>
        <button className={style.closeButton} onClick={()=>onClose(id)}>x</button>
            <h4>{name}</h4>
            <p>Max{max}°</p>
            <p>Min{min}°</p>
            <Link to={`/ciudad/${id}`}>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt='img'/>
            </Link>
        </div>
    )
}