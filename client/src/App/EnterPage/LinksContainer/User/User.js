import React from 'react';
import './user.scss';

export function User(props) {
    return <div className='user-container'>
        <h4>{props.name}</h4>
    </div>
}