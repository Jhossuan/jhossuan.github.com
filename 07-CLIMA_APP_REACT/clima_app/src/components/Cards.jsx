import React from 'react'
import Card from './Card'
import styles from '../styles/Cards.module.css'

export default function Cards(props){
    if(!props.cities)return<h3>No hay ciudades disponibles</h3>
    return(
        <div className={styles.container}>
            {
                props.cities && props.cities.map(i => (
                    <Card
                    max={i.max}
                    min={i.min}
                    name={i.name}
                    id={i.id}
                    img={i.img}
                    onClose={props.onClose}
                    key={i.id}
                    />
                ))
            }
        </div>
    )
}