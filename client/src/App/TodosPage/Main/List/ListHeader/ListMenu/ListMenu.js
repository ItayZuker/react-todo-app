import React, { useState } from 'react';
import {MenuContainer} from './MenuContainer/MenuContainer.js';
import './list-menu.scss';

export function ListMenu(props) {

    let [listMenuOpen, setListMenuOpen] = useState(false)

    return <div
        className={'list-menu-container ' + (props.listMenuOpen ? '' : 'hide')}>
        <i
            class="fas fa-ellipsis-h"
            onClick={() => setListMenuOpen(true)}
            ></i>
        <MenuContainer
            listMenuOpen={listMenuOpen}
            >
            </MenuContainer>
    </div>
}