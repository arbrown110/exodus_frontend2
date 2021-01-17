import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/adventures">What Have I done so far</Link>
            <Link to="/adventures/new">New Topic of Adventure</Link>
            <Link to="/About">About</Link>
            <Link to="/Contacts">Contact</Link>
            <Link to="/Links">References for travel</Link>
        </div>
    )
}

export default NavBar