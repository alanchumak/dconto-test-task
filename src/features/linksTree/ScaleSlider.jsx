import React, { useState } from 'react';
import Slider from 'react-input-slider';
import { useDispatch } from 'react-redux';
import './LinksTreeControl.css';
import { scaleChanged } from './linksTreeSlice'


export const ScaleSlider = () => {
    const [value, setValue] = useState(100) 
    const dispatch = useDispatch()

    const minValue = 30
    const maxValue = 300
    const step = 10

    const onDecreaseButtonClicked = () => {
        let newValue = (value - step < minValue) ? minValue : value - step 
        setValue(newValue) // todo нужно ли хранить, если это будет render?
        dispatch(scaleChanged({ scale: newValue/100}))
    }

    const onIncreaseButtonClicked = () => {
        let newValue = (value + step > maxValue) ? maxValue : value + step
        setValue(newValue)
        dispatch(scaleChanged({ scale: newValue/100}))
    }

    const onChanged = newValue => {
        setValue(newValue.x)
        dispatch(scaleChanged({ scale: newValue.x/100}))
    }

    return (
        <div className='slider'>
            {value + '%'}
            <button onClick={onDecreaseButtonClicked}>-</button>
            <Slider
                axis="x"
                x={value}
                onChange={onChanged}
                xmin={minValue}
                xmax={maxValue}
                xstep={step}
            />
            <button onClick={onIncreaseButtonClicked}>+</button>
        </div>
    );
}