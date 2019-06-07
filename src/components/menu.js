import React from 'react'
import { Link }  from 'gatsby'

const Menu = () => (
    <div style={{
        background: '#f4f4f4',
        paddingTop: '10px'
    }}>

    <ul style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly'
    }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
    </ul>

    </div>
)

export default Menu;