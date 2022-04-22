import React, { useState } from "react";
import styles from './ImagePicker.module.css';
import { Placeholder } from "./Placeholder";


export const ImagePicker = React.forwardRef(
    ({ id }, inputRef) => {
        const [file, setFile] = useState(null);
        // const inputRef = React.createRef();

        const onClicked = () => { inputRef.current.click() }

        const onChanged = (e) => { setFile(e.target.files[0]) }

        const content = file ?
            <img src={URL.createObjectURL(file)} alt='smth'/>
            : <Placeholder />

        return (
            <div className={styles.field}>
                <label htmlFor={id} className={styles.label}>Фото</label>
                <div className={styles.imagePicker} onClick={onClicked}>
                    {content}
                    <input
                        ref={inputRef}
                        className={styles.input}
                        id={id}
                        type='file'
                        accept="image/*"
                        onChange={onChanged}
                    />
                </div>
            </div>
        )
    })
