import React from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu.js';
import './dropdown.scss';

export function Dropdown(props) {

    return <div
            className='dropdown-container'>
        <i
            className="fas fa-angle-down"
            id='dropdown-button'
            ></i>
        <DropdownMenu
            user={props.user}
            ></DropdownMenu>
    </div>
}