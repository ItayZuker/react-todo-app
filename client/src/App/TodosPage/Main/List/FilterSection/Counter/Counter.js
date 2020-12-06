import React from 'react';
import './counter.scss';



export function Counter(props) {

    const allTodosInList = props.list.length;
    const notCompletedTodos = props.list.filter(todo => todo.completed === false).length;

    
    return <div
        className='counter-container'>
        <p
            className={allTodosInList > 0 ? 'active' : ''}
            ><span
                className={allTodosInList > 0 ? notCompletedTodos > 0 ? 'red' : 'green' : ''}
            >
            {notCompletedTodos}</span> left
        </p>
    </div>
}