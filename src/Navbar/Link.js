import React from 'react'
import { NavLink } from 'react-router-dom'

export const Link = (props) => {
    const isActiveStyle = ({ isActive }) =>
        ({ textDecoration: isActive ? 'underline' : 'none' })

    return (
        <NavLink {...props} style={isActiveStyle}>
            {props.children}
        </NavLink>
    )
}