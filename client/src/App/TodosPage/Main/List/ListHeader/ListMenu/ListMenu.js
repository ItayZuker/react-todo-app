import React, { useState } from 'react';
import {MenuContainer} from './MenuContainer/MenuContainer.js';
import './list-menu.scss';

export function ListMenu(props) {

    let [listMenuOpen, setListMenuOpen] = useState(false)

    function openClose(e) {
        if (e.target.id === ('list-menu ' + props.listId)) {
            setListMenuOpen(true)
        } else {
            setListMenuOpen(false)
        }
    }

    document.addEventListener('click', openClose)

    return <div
        className={'list-menu-container ' + (props.listMenuOpen ? '' : 'hide')}>
        <i
            className="fas fa-ellipsis-h"
            id={'list-menu ' + props.listId}
            ></i>
        <MenuContainer
            listMenuOpen={listMenuOpen}
            listId={props.listId}
            userId={props.userId}
            >
            </MenuContainer>
    </div>
}