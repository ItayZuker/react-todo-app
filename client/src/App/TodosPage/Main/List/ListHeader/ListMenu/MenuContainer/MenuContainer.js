import React, { useEffect, useState } from 'react';
import {DeleteList} from './DeleteList/DeleteList.js';
import './menu-container.scss';

export function MenuContainer(props) {

    return <div
        className={'menu-container ' + (props.listMenuOpen ? '' : 'hide')}
        id='menu-container'>
        <DeleteList
            listId={props.listId}
            userId={props.userId}
            ></DeleteList>
    </div>
}