import React, { useEffect, useState, useLayoutEffect } from 'react'
import { DeleteIcon } from './DeleteIcon';
import styles from './PaletteItem.module.css';
import {useDispatch } from 'react-redux';
import { colorUpdated, colorDeleted} from '../../../features/palette/paletteSlice'


export const PaletteItem = ({ id, color, open=false }) => {
    const dispatch = useDispatch()

    const onChanged = (e) => dispatch(
        colorUpdated({ id, color: e.target.value})
    )
    const onDeleted = () => dispatch(colorDeleted({id}))

    const inputRef = React.createRef()
    // const [isNew, setIsNew] = useState(true)
    
    useEffect(() => {
        if (open){
        inputRef.current.focus()
        inputRef.current.click()
        console.log('mounted', id)
        }
    }, []);


    return (
        <div
            className={styles.paletteItem}
            style={{ backgroundColor: color }}
        >
            <input
                className={styles.input}
                type="color"
                value={color}
                onChange={onChanged}
                ref={inputRef}
            />
            <div 
                className={styles.deleteIcon}
                onClick={onDeleted}
            >
                <DeleteIcon/>
            </div>
        </div>
    )
}

