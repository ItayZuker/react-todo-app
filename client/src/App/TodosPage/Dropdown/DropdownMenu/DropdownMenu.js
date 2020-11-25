import React, {useState} from 'react';
import './dropdown-menu.scss';
import { MenuItemDeleteUser } from './MenuItemDeleteUser/MenuItemDeleteUser.js';



export function DropdownMenu() {

    let [open, setOpen] = useState(false);
 
    function close(e) {
        if(open === false) {
            if(e.target.id === 'dropdown-button') {
                setOpen(true);
            }
        } else if(e.target.id !== 'dropdown-container') {
                setOpen(false);
        }   
    }

    document.addEventListener('click', close);

    return <div
        className={'dropdown-menu-container ' + (open ? 'open' : '')}
        id='dropdown-container'
        >
        <MenuItemDeleteUser></MenuItemDeleteUser>
    </div>
}