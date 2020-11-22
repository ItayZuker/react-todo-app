import React, {useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './check-todo-button.scss';

export function CheckTodoButton(props) {

    const context = useContext(appContext);

    return <button
        className={'check ' + (props.completed ? 'v' : 'x')}
        onClick={() => {
        if(props.completed) { // Update DataBase and state for this todo ---> completed: false
            fetch(`/todos/api/${props.todoId}/not-completed`, {
                method: "PUT",
            })
            .then((res) => {
                console.log(res);
                context.setRenderTodos(true);
            });
        } else { // Update DataBase and state for this todo ---> completed: true
            fetch(`/todos/api/${props.todoId}/completed`, {
                method: "PUT",
            })
            .then((res) => {
                console.log(res);
                context.setRenderTodos(true);
            });
        }
    }}
    >v</button>
}