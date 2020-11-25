import React, {useRef, useState} from 'react';
import { DropdownMenu } from './DropdownMenu/DropdownMenu.js';
import './dropdown.scss';

export function Dropdown(props) {

    const [openDropdown, setOpenDropdown] = useState(false);

    const dropdownContainer = useRef();

    return <div
            className='dropdown-container'>
        <i
            className="fas fa-angle-down"
            onClick={() => {
                setOpenDropdown(true);
            }}></i>
        <DropdownMenu
            openState={openDropdown}
            userId={props.userId}
            ></DropdownMenu>
    </div>
}