import React from 'react';
import {useHistory} from 'react-router-dom';
import {Dropdown} from './DropDown/Dropdown.js';
import './header.scss';

export function Header(props) {

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
                }}
                >
            </i>
            <h1
                className={props.todos.length > 0 ? 'red' : ''}
                >{props.user.name} todos
            </h1>
        </div>
        <div
            className='right-side'
            >
            <Dropdown
                ></Dropdown>
        </div>
    </div>
}