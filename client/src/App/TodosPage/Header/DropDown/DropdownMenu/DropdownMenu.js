import React from 'react';
import './dropdown-menu.scss';
import { MenuItemDeleteUser } from './MenuItemDeleteUser/MenuItemDeleteUser.js';

export function DropdownMenu(props) {

    return <div
        className={'dropdown-menu-container ' + (props.open ? 'open' : '')}
        onClick={() => props.setOpen(false)}
        >
        <MenuItemDeleteUser></MenuItemDeleteUser>
    </div>
}