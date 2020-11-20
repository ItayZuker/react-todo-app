import React, { useState, useEffect, useContext } from 'react';
import { appContext } from '../../../../../AppContext.js';
import './todo-item.scss';



export function TodoItem(props) {
    const context = useContext(appContext);

    let [todoComplited, setTodoComplited] = useState(props.complited);
    let [displayStatus, setDisplayStatus] = useState(null);

    useEffect(() => {
        setTodoComplited(props.complited)
    }, [props.complited]);


    useEffect(() => {
        if(context.displayTodos === 'active') {
            todoComplited ? setDisplayStatus(false) : setDisplayStatus(true);
        } else if(context.displayTodos === 'complited') {
            todoComplited ? setDisplayStatus(true) : setDisplayStatus(false);
        } else {
            setDisplayStatus(true);
        };
    }, [context.displayTodos]);

    return <div
            className={'todo-item-container ' + (displayStatus ? '' : 'hide')}>
        <div className='check-and-todo-body'>
            <button
                className={'check ' + (todoComplited ? 'v' : 'x')}
                onClick={() => {
                if(todoComplited) {
                    if(context.displayTodos === 'complited') {
                        setDisplayStatus(false);
                    } 
                    // update DataBase and state for this todo item ---> complited: false
                    fetch(`/todos/api/${props.todoId}/not-complited`, {
                        method: "PUT",
                    })
                    .then((res) => {
                        console.log(res);
                        setTodoComplited(false);
                        context.setRenderList(true);

                    });
                } else {
                    if(context.displayTodos === 'active') {
                        setDisplayStatus(false);
                    } 
                    // update DataBase and state for this todo item ---> complited: true
                    fetch(`/todos/api/${props.todoId}/complited`, {
                        method: "PUT",
                    })
                    .then((res) => {
                        console.log(res);
                        setTodoComplited(true);
                        context.setRenderList(true);
                    })
                }
            }}
            >v</button>
            <div
                className={'todo-body ' + (todoComplited ? 'complited' : '')}>
                <h4>{props.body}</h4>
            </div>
        </div>
        <button
            className='delete-button'
            onClick={() => {
                fetch(`/todos/api/${props.todoId}`, {
                    method: 'DELETE',
                }).then((res) => {
                    console.log(res);
                    context.setRenderList(true);
                })
            }}
            >x</button>
    </div>
}