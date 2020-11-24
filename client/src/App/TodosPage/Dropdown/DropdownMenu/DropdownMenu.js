import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../../AppContext';
import './dropdown-menu.scss';
import { MenuItemDeleteUser } from './MenuItemDeleteUser/MenuItemDeleteUser.js';

export function DropdownMenu(props) {

    const context = useContext(appContext);

    return <div className={'dropdown-menu-container ' + (props.openState ? 'open' : '')}>
        <MenuItemDeleteUser
            openState={props.openDropdown}
            userId={props.userId}
            ></MenuItemDeleteUser>
    </div>
}