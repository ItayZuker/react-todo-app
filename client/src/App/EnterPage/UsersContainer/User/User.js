import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../../../AppContext';
import './user.scss';

export function User(props) {

    const context = useContext(appContext);

    return <Link
        to={`/todos/${props.userId}`}
        onClick={() => {
            context.setRenderTodos(true)
        }}>{props.name}</Link>
}