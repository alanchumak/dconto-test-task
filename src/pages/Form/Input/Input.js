import React from 'react'
import styles from './Input.module.css';


export const Input = ({id, title, placeholder, value, onChange}) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={id}>{title}</label>
            <input 
                className={styles.input} 
                id={id} 
                value={value} 
                placeholder={placeholder}
                onChange={onChange} 
            /> 
        </div>
    )
} 