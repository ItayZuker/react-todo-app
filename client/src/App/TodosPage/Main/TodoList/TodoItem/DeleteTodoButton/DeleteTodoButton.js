import React, { useContext } from 'react';
import { appContext } from '../../../../../../AppContext';
import './delete-todo-button.scss';

export function DeleteTodoButton(props) {

    const context = useContext(appContext);

    return <button
        className='delete-button'
        onClick={() => {
            fetch(`/todos/api/${props.todoId}`, {
                method: 'DELETE',
            }).then((res) => {
                console.log(res);
                context.setRenderTodos(true);
            })
        }}
    >x</button>
}