import React from 'react'
import styles from './Palette.module.css';
import { PaletteItem } from './PaletteItem'
import { useSelector, useDispatch } from 'react-redux';
import { colorAdded,  selectColors } from '../../features/palette/paletteSlice'

export const Palette = () => {
    const dispatch = useDispatch()
    const colors = useSelector(selectColors)
    const content = Object.keys(colors).map(
        id => <PaletteItem key={id} id={id} color={colors[id]} />
    )

    return(
        <div className={styles.palette}>
            <div className={styles.colorList}>
                {content}
            </div>
            <button onClick={() => dispatch(colorAdded())}>Добавить цвет</button>
        </div>
    )
}