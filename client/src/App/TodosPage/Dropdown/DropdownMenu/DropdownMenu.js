import React from 'react';
import './dropdown-menu.scss';
import { MenuItemDeleteUser } from './MenuItemDeleteUser/MenuItemDeleteUser.js';

export function DropdownMenu(props) {


    return <div
        className={'dropdown-menu-container ' + (props.openState ? 'open' : '')}
        >
        <MenuItemDeleteUser
            openState={props.openDropdown}
            userId={props.userId}
            ></MenuItemDeleteUser>
    </div>
}