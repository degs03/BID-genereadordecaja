import React from 'react'
import styles from './Color.module.css'
const Color = props => {
    const {name}=props;
    return (
        <div className={styles.box} style={{backgroundColor:`${name}`}}>
        </div>
    )
}

export default Color