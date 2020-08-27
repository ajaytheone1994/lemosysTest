import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo';
import './style.css';

function Header() {
    return (
        <div>
            < img src={require('../../assets/images/backgroun-first_sec.png')} className="img-fluid" />
            <div className="logo-container">
                <Logo />
            </div>
            <div className="caption-container">
                <h1 style={{ margin: 0 }}>Education</h1>
                <h1 className="caption-text">Enhanced</h1>
                <button className="btn btn-sm btn-primary border border-dark rounded-pill" style={{ fontSize: 12, fontWeight: 'bold' }}>REGISTER NOW</button>
            </div>
        </div>
    )
}

export default Header
