import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'


export default function Banner() {
    return (
        <div>
            <h1 className="title">Family Tree</h1>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}
