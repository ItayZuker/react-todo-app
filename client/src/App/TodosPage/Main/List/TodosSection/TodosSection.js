import React from 'react';
import {Todo} from './Todo/Todo.js';
import './todos-section.scss';

export function TodosSection(props) {

    return <div className='todos-section-container'>
        {props.list.map(todo => 
            <Todo
                key={todo._id}
                userId={todo.userId}
                listId={props.listId}
                todoId={todo._id}
                body={todo.body}
                todoCompleted={todo.completed}
            >
            </Todo>
        )}
    </div>
}