import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../AppContext.js';
import {Dropdown} from './DropDown/Dropdown.js';
import './header.scss';

export function Header() {

    const context = useContext(appContext)
    const todos = context.todosArray.filter(todo => todo.userId === context.user._id)
    const history = useHistory();

    return <div
        className='header-container'>
        <div
            className='left-side'>
            <i
                className="fas fa-angle-left"
                id='back-button'
                onClick={() => {
                    history.push('/');
                    context.setListsArray([])
                }}
                >
            </i>
            <h1
                className={todos.length > 0 ? 'red' : ''}
                >{context.user.name} todos
            </h1>
        </div>
        <div
            className='right-side'
            >
            <Dropdown></Dropdown>
        </div>
    </div>
}