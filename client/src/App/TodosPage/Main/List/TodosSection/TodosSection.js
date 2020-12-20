import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../AppContext.js';
import {Todo} from './Todo/Todo.js';
import './todos-section.scss';

export function TodosSection() {

    const url = useParams()
    const context = useContext(appContext)
    const todos = context.todosArray.filter(todo => todo.listId === url.listId)

    return <div className='todos-section-container'>
        {todos.map(todo => 
            <Todo
                key={todo._id}
                todoId={todo._id}
                >
                </Todo>
        )}
    </div>
}