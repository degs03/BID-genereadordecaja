import { useState } from 'react'
import styles from './Box.module.css'
import React from 'react'
import Color from './Color/Color';

const Box = () => {
    const [color, setColor] = useState([]);
    const [newColor, setNewColor] = useState(""); //setNewColor controla el valor de nuestra entrada o sea el input
    
    const handleNewColor = (e) =>{
        e.preventDefault();
        /*aqui se maneja que sea un nuevo objeto, creando un aux */
        let aux = [...color]; /* aux es igual al valor que tenga la lista color */
        aux.push({name:newColor}); //Se le agrega un elemento al diccionario
        setColor([...aux]); //se establece nuevo valor en el setColor con el valor de aux
        console.log("Color", aux);
        setNewColor("");
    }
    return (
        <>
            <form className={styles.add} onSubmit={handleNewColor}>
                <input type="text" value={newColor} onChange = {(e)=>setNewColor(e.target.value)}/> {/* El onchange establece al setColor con valor del input, cuando le damos agregar 
                                                                                                        nos crea en el diccionario */}
                <button>Add</button>
            </form>
            <div className={styles.colorBox}>
                {/* Haremos un mapeo de la lista de colores o "color" */}
                {color.map((item, idx, list) =>{
                    return(
                        <Color key={idx}  {...item}/> //Por cada elemnto de la lista, devuelve un color || En {...item} pasamos el elemento en el que esta
                    )
                    
                })
                }
            </div>
        </>
    )
}

export default Box