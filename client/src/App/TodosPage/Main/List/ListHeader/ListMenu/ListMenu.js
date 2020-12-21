import React, {useEffect, useState, useContext} from 'react';
import {MenuContainer} from './MenuContainer/MenuContainer.js';
import { appContext } from '../../../../../../AppContext.js';
import './list-menu.scss';

export function ListMenu() {

    const context = useContext(appContext)
    let [listMenuOpen, setListMenuOpen] = useState(false)


    useEffect(() => {
        setListMenuOpen(false)
    }, [context.listDeleted])

    return <div
        className={'list-menu-container ' + (listMenuOpen ? '' : 'hide')}
        tabIndex={-1}
        onClick={() => setListMenuOpen(true)} 
        onBlur={() => setListMenuOpen(false)}
        >
        <i
            className="fas fa-ellipsis-h"
            ></i>
        <MenuContainer
            listMenuOpen={listMenuOpen}
            ></MenuContainer>
    </div>
}