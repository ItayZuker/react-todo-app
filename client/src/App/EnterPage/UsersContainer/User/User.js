import React from 'react';
import { Link } from 'react-router-dom';
import './user.scss';

export function User(props) {

    return <div
        className='link-container'
        >
        <Link
            to={`/todos/${props.userId}`}
            >{props.name}
        </Link>
    </div>
}