import React from 'react';
import { LinksContainer } from './LinksContainer/LinksContainer.js';
import { NewUser } from './NewUser/NewUser.js';
import './enter-page.scss';

export function EnterPage() {
    return <div className='enter-page-container'>
        <div className='logo-container'>
            <h1>TaDam!</h1>
            <h2>It's Done.</h2>
        </div>
        <div className='enter-containet'>
            <h4>Choose / Create your list:</h4>
            <LinksContainer></LinksContainer>
        </div>
        <NewUser></NewUser>
    </div>
}