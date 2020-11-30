import React, {useContext} from 'react';
import { appContext } from '../../../AppContext';
import './header.scss';

export function Header(props) {

    const context = useContext(appContext);

    return <div className='header-container'>
        <h1
            className={'user-title ' + (context.allTodos > 0 ? 'red' : '')}
        >{props.user.name} todos</h1>
    </div>
}