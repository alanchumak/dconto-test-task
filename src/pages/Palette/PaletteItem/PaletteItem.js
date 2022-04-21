import React from 'react'
import { DeleteIcon } from './DeleteIcon';
import styles from './PaletteItem.module.css';
import {useDispatch } from 'react-redux';
import { colorUpdated, colorDeleted} from '../../../features/palette/paletteSlice'


export const PaletteItem = ({id, color}) => {
    const dispatch = useDispatch()

    const onChanged = (e) => dispatch(
        colorUpdated({ id, color: e.target.value})
    )

    const onDeleted = () => dispatch(colorDeleted({id}))

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