import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../../AppContext';
import './check-todo.scss';

export function CheckTodo(props) {
    
    const url = useParams()
    const context = useContext(appContext);

    return <div
        className='check-todo-container'
        >
        <button
            className={'check ' + (props.todoCompleted ? 'v' : 'x')}
            onClick={() => {
                if(props.todoCompleted) {
                    context.listsArray.forEach(list => {
                        if (list._id === url.listId) {
                            list.completed --
                        }
                    })
                    context.todosArray.forEach(todo => {
                        if (todo._id === props.todoId) todo.completed = false
                    })                    
                    context.listsArray.forEach(list => {
                        if (list._id === url.listId) list.allCompleted = false
                    })
                    fetch(`/todos/api/todo-false/${props.todoId}`, {
                        method: "PUT",
                    })
                    .then(() => {
                        context.setRenderTodos(true)
                    })
                } else {
                    context.listsArray.forEach(list => {
                        if (list._id === url.listId) {
                            list.completed ++
                            if (list.completed === list.todos) list.allCompleted = true
                        }
                    })
                    context.todosArray.forEach(todo => {
                        if (todo._id === props.todoId) todo.completed = true;
                    })
                    fetch(`/todos/api/todo-true/${props.todoId}`, {
                        method: "PUT",
                    })
                    .then(() => {
                        context.setRenderTodos(true)
                    })
                }
            }}
        ><i className="fas fa-check"></i>           
        </button>
    </div>
}