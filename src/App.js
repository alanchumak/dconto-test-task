import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar'
import {Form} from './pages/Form'
import { Palette } from './pages/Palette'
import styles from './App.module.css'

export const App = () => {
    return(
        <BrowserRouter>
            <div className={styles.blackBackground}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="palette" element={<Palette />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
