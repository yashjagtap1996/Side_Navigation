import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>

            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/contact">Contact</NavLink></li>
            </ul>

        </>
    )
}

export default Navbar
