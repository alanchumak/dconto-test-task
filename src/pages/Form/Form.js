import React, { useState } from 'react'
import { Input } from './Input'
import styles from './Form.module.css';
import { ImagePicker } from './ImagePicker';
import { TextArea } from './TextArea';

export const Form = () => {
    const [firstName, setFirstName] = useState('')
    const onFirstNameChanged = (e) => setFirstName(e.target.value)

    const [lastName, setLastName] = useState('')
    const onLastNameChanged = (e) => setLastName(e.target.value)

    const [middleName, setMiddleName] = useState('')
    const onMiddleNameChanged = (e) => setMiddleName(e.target.value)

    const [response, setResponse] = useState('')

    const photoRef = React.createRef();

    const onSave = async () => {
        const photo = photoRef.current.files[0]
        let formData = new FormData();
        formData.append("action", 'send_data');
        formData.append("id", 1);
        formData.append("image", photo);
        formData.append("contact[]", firstName);
        formData.append("contact[]", lastName);
        formData.append("contact[]", middleName);

        const requestOptions = {
            method: 'POST',
            body: formData
        }
        const rawResponse = await fetch('https://test-job.pixli.app/send.php', requestOptions)
        const content = await rawResponse.json()
        // console.log(JSON.stringify(content));
        setResponse(JSON.stringify(content))
    }

    return(
        <form className={styles.form}>
            <Input id='firstName' title='Имя' placeholder='Лев' value={firstName} onChange={onFirstNameChanged}/>
            <Input id='lastName' title='Фамилия' placeholder='Лещенко' value={lastName} onChange={onLastNameChanged}/>
            <Input id='middleName' title='Отчество' placeholder='Валерьянович' value={middleName} onChange={onMiddleNameChanged}/>
            <ImagePicker id='photo' ref={photoRef}/>
            <button type='button' onClick={onSave}>Сохранить</button>
            <TextArea id='response' title='Response' value={response}/>
        </form>
    )
} 