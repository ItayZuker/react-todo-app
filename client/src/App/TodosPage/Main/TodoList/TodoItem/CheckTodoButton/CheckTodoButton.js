import React, {useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './check-todo-button.scss';

export function CheckTodoButton(props) {

    const context = useContext(appContext);

    return <button
        className={'check ' + (props.completed ? 'v' : 'x')}
        onClick={() => {
        if(props.completed) {                                      //
            fetch(`/todos/api/${props.todoId}`, {     //  ---> Update DataBase and completed state for this todo: False
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    body: props.body,
                    completed: false,
                })
            })                                                      //
            .then((res) => {                                        //
                console.log(res);                                   //
                context.setRenderTodos(true);                       //
            });
        } else {                                                   //
            fetch(`/todos/api/${props.todoId}`, {         //  ---> Update DataBase and completed state for this todo: True
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    body: props.body,
                    completed: true,
                })                                      //
            })                                                      //
            .then((res) => {                                        //
                console.log(res);                                   //
                context.setRenderTodos(true);                       //
            });
        }
    }}
    >v</button>
}