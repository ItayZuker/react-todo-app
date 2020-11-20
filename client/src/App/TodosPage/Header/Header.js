import React, {useContext} from 'react';
import './header.scss';
import { appContext } from '../../../AppContext';

export function Header() {

    const context = useContext(appContext);

    return <div className='header-container'>
        <h1
            className={'user-title ' + (context.allTodos > 0 ? 'red' : '')}
        >todos</h1>
    </div>
}