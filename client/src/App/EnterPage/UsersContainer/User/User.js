import React from 'react';
import { Link } from 'react-router-dom';
import './user.scss';

export function User(props) {

    return <Link
        to={`/todos/${props.userId}`}
        >{props.name}
    </Link>
}