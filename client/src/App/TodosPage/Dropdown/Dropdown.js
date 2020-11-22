import React, {useState} from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu.js';
import './dropdown.scss';

export function Dropdown(props) {

    const [openDropdown, setOpenDropdown] = useState(false)

    return <div className='dropdown-container'>
        <i
            class="fas fa-angle-down"
            onClick={() => {
                openDropdown ? setOpenDropdown(false) : setOpenDropdown(true);
            }}></i>
        <DropdownMenu
            openState={openDropdown}
            userId={props.userId}
            ></DropdownMenu>
    </div>
}