import React from 'react';
import './welcome-page.scss';
import {Link} from 'react-router-dom';

export function WelcomePage() {
    return <div className='welcom-page-container'>
        <div className='welcome-container'>
            <h1>Welcom!</h1>
            <Link to="/todos-page">Click To Start</Link>
        </div>
    </div>
}