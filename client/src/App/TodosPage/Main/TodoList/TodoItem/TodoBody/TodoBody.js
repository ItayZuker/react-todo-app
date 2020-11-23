import React, {useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './todo-body.scss';

export function TodoBody(props) {

    const context = useContext(appContext);

    const todoInput = document.getElementById(`${props.todoId}`);

    return <div className={'todo-body-container'}>
        <form onSubmit={(e) => {
            e.preventDefault();
            todoInput.placeholder = e.target.todo.value;
            if(e.target.todo.value === '') {
                console.log("123");
                fetch(`/todos/api/${props.todoId}`, {
                    method: 'DELETE'
                }).then((res) => {
                    console.log(res);
                    context.setRenderTodos(true);
                });
            } else {
                fetch(`/todos/api/${props.todoId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        body: e.target.todo.value,
                        completed: false,
                    })
                }).then((res) => {
                    console.log(res);
                    todoInput.readOnly=true;
                    e.target.todo.value = '';
                    context.setRenderTodos(true);  
                })
            }
        }}>
            <input
                id={props.todoId}
                name='todo'
                className={props.complited ? 'completed' : ''}
                readOnly={true}
                onDoubleClick={() => {
                    todoInput.readOnly=false;
                    todoInput.value=props.body;
                }}
                placeholder={props.body}></input>
        </form>
    </div>
}


