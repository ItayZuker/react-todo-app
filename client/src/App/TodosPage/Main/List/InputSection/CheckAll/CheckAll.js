import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'
import { appContext } from '../../../../../../AppContext';
import './check-all.scss';

export function CheckAll() {

    const url = useParams()
    const context = useContext(appContext)
    const list = context.listsArray.find(list => list._id === url.listId) || {}
    
    return <button
        className={'all-green-button ' + (list.active ? list.allCompleted ? 'true' : 'false' : 'not-active')}
        onClick={() => {
            if(list.completed === list.todos) {
                context.listsArray.forEach(list => {
                    if (list._id === url.listId) {
                        list.allCompleted = false
                        list.completed = 0
                    }
                })
                context.todosArray.forEach(todo => {
                    if (todo.listId === url.listId) todo.completed = false
                })
                fetch(`/todos/api/all-todos-completed-false/${url.listId}`, {
                    method: 'PUT',
                })
                .then(() => {
                    context.setRenderTodos(true)
                })
            } else {
                context.listsArray.forEach(list => {
                    if (list._id === url.listId) {
                        list.allCompleted = true
                        list.completed = list.todos
                    };
                })
                context.todosArray.forEach(todo => {
                    if (todo.listId === url.listId) todo.completed = true;
                })
                fetch(`/todos/api/all-todos-completed-true/${url.listId}`, {
                    method: 'PUT',
                })
                .then(() => {
                    context.setRenderTodos(true)
                })
            }
        }}
        >
        {list.active ? list.allCompleted ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
    </button>
}