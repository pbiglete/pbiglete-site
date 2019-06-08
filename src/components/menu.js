import React from 'react'
import { Button } from 'reactstrap';
import { Link }  from 'gatsby'


const Menu = () => (
    <div style={{
        background: '#6da5ff',
        paddingTop: '20px'
    }}>

    <ul style={{
        listStyle: 'none',
        display: 'flex',
        paddingRight: 720,
        justifyContent: 'center'
    }}>
        <h3>{'//'}</h3>
        <h3><Link to="/">about</Link></h3>
        <h3>{'//'}</h3>
        <h3><Link to="/projects">projects</Link></h3>
        <h3>{'//'}</h3>
    </ul>
    </div>
)

export default Menu;