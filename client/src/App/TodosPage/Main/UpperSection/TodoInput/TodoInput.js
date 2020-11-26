import React, {useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../../../../AppContext.js';
import './todo-input.scss';

export function TodoInput() {

    let context = useContext(appContext);

    const [todoNotification, setTodoNotification] = useState('');
    const [renderTodoNotification, setRenderTodoNotification] = useState(false);

    const user = useParams();

    function handleNewTodoError() {
        setRenderTodoNotification(true)
        setTimeout(() => {
            setRenderTodoNotification(false)
            setTodoNotification('')
        }, 1500);
    }

    return <form
        onSubmit={(e) => {
            e.preventDefault();
            if(e.target.todo.value === '') {
                e.target.todo.value = '';
                setTodoNotification('Nothig todo...');
                handleNewTodoError();
            } else if(context.todosArray.find(todo => {
                if(todo.body === e.target.todo.value) return true})) {
                e.target.todo.value = '';
                setTodoNotification("Don't do it twice!");
                handleNewTodoError();
            } else {
                fetch('/todos/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: user.userId,
                        body: e.target.todo.value,
                        completed: false,
                        deleted: false,
                    }),
                }).then((res) => {
                    console.log(res);
                    e.target.todo.value = '';
                    context.setRenderTodos(true);
                });
            };
        }}>
        <input
            className={renderTodoNotification ? 'notification' : ''}
            type='text'
            name='todo'
            placeholder={renderTodoNotification ? todoNotification : 'What needs to be done?'}

        ></input>
    </form>
}