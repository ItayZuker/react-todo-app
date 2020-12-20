import React from 'react';
import {DeleteList} from './DeleteList/DeleteList.js';
import './menu-container.scss';

export function MenuContainer(props) {
    
    return <div
        className={'menu-container ' + (props.listMenuOpen ? '' : 'hide')}
        >
        <DeleteList></DeleteList>
    </div>
}