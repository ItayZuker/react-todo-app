import React from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu.js';
import './dropdown.scss';

export function Dropdown() {

    return <div
            className='dropdown-container'>
        <i
            className="fas fa-angle-down"
            id='dropdown-button'
            ></i>
        <DropdownMenu
            ></DropdownMenu>
    </div>
}