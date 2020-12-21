import React, {useState} from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu.js';
import './dropdown.scss';

export function Dropdown() {

    let [open, setOpen] = useState(false);

    return <div
            className='dropdown-container'
            tabIndex={-1}
            onFocus={() => setOpen(true)} 
            onBlur={() => setOpen(false)}
        >
        <i
            className="fas fa-angle-down"
            ></i>
        <DropdownMenu
            open={open}
            setOpen={() => setOpen()}
            ></DropdownMenu>
    </div>
}