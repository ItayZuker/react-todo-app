import React, { useState, useEffect, useContext } from 'react';
import { CheckTodoButton } from './CheckTodoButton/CheckTodoButton.js';
import { DeleteTodoButton } from './DeleteTodoButton/DeleteTodoButton.js';
import { appContext } from '../../../../../AppContext.js';
import { TodoBody } from './TodoBody/TodoBody.js';
import './todo-item.scss';



export function TodoItem(props) {

    const context = useContext(appContext);

    let [todoCompleted, setTodoCompleted] = useState(props.completed);
    let [displayStatus, setDisplayStatus] = useState(null);

    // Update completed state for this todo if change is coming from DataBase

    useEffect(() => {
        setTodoCompleted(props.completed);
    }, [props.completed]);

    // Update display state for this todo
    
    useEffect(() => {
        if(context.displayTodos === 'active') {
            todoCompleted ? setDisplayStatus(false) : setDisplayStatus(true);
        } else if(context.displayTodos === 'complited') {
            todoCompleted ? setDisplayStatus(true) : setDisplayStatus(false);
        } else {
            setDisplayStatus(true);
        };
    }, [context.displayTodos, context.renderTodos]);

    return <div
            className={'todo-item-container ' + (displayStatus ? '' : 'hide')}>
        <div className='check-button-and-content'>
            <CheckTodoButton
                todoId={props.todoId}
                completed={props.completed}
                ></CheckTodoButton>
            <TodoBody
                todoId={props.todoId}
                body={props.body}
                complited={props.completed}
                ></TodoBody>
        </div>
        <DeleteTodoButton
            todoId={props.todoId}
            ></DeleteTodoButton>
    </div>
}