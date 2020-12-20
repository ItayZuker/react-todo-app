import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './todo-input.scss';

export function TodoInput() {

    const url = useParams()
    const context = useContext(appContext);
    const todos = context.todosArray.filter(todo => todo.listId === url.listId)
    const [todoNotification, setTodoNotification] = useState('')
    const [renderTodoNotification, setRenderTodoNotification] = useState(false)

    function handleNewTodoError() {
        setRenderTodoNotification(true)
        setTimeout(() => {
            setRenderTodoNotification(false)
            setTodoNotification('')
        }, 1500)
    }

    return <form
        onSubmit={(e) => {
            e.preventDefault()
            if(e.target.todo.value === '') {
                e.target.todo.value = ''
                setTodoNotification('Nothig todo...')
                handleNewTodoError()
            } else if(todos.find(todo => {
                if(todo.body === e.target.todo.value) return true})) {
                e.target.todo.value = ''
                setTodoNotification("Don't do it twice!")
                handleNewTodoError()
            } else {
                context.listsArray.forEach(list => {
                    if (list._id === url.listId) {
                        list.allCompleted = false
                        list.active = true
                        list.todos ++
                    }
                })
                fetch('/todos/api/new-todo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: url.userId,
                        listId: url.listId,
                        body: e.target.todo.value,
                        completed: false,
                        created: new Date(),
                    }),
                }).then(() => {
                    e.target.todo.value = ''
                    context.setRenderTodos(true)
                })
            }
        }}>
        <input
            className={renderTodoNotification ? 'notification' : ''}
            type='text'
            name='todo'
            placeholder={renderTodoNotification ? todoNotification : 'What needs to be done?'}
        ></input>
    </form>
}