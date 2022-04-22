import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Link } from './Link'
import styles from './Navbar.module.css'

export const Navbar = () =>{
    return(
        <nav className={styles.navLinks}>
            <Link to="/">Форма</Link>
            <Link to="/palette">Палитра</Link>
        </nav>
    )
}
