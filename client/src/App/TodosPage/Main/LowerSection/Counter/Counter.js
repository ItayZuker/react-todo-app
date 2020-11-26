import React, {useContext} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './counter.scss';



export function Counter() {

    const context = useContext(appContext);

    const allTodos = context.todosArray.length;
    const todosNotCompleted = (context.todosArray.filter(todo => todo.completed === false).length);

    return <div
        className='counter-container'>
        <p
            className={allTodos > 0 ? 'active' : ''}
            ><span
                className={allTodos > 0 ? todosNotCompleted > 0 ? 'red' : 'green' : ''}
            >
            {todosNotCompleted}</span> left
        </p>
    </div>
}