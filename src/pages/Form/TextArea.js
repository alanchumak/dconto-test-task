import React from 'react'
import styles from './Input/Input.module.css';


export const TextArea = ({ id, title, value }) => {
    return (
        <div className={styles.field}>
            <label className={styles.label} htmlFor={id}>{title}</label>
            <textarea
                className={styles.input}
                id={id}
                value={value}
                style={{ height: '120px', resize: 'none' }}
                readOnly
            />
        </div>
    )
} 