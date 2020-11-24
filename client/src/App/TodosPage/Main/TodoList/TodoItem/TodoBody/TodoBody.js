import React, {useContext, useEffect, useRef, useState} from 'react';
import { appContext } from '../../../../../../AppContext';
import './todo-body.scss';

export function TodoBody(props) {

    let context = useContext(appContext);
    
    let [editActive, setEditActive] = useState(false);

    const todoSpan = useRef();

    useEffect(() => {
        if(editActive) {
            todoSpan.current.focus();   
        } else {
            setEditActive(false);       //  ---> To fix delay bug
        }
    }, [editActive])

    function todoReset() {
        if(editActive && todoSpan.current !== null) {
            todoSpan.current.innerText = props.body;
            setEditActive(false)
        };
    };

    function pressEnter(e) {
        if(e.charCode === 13 && editActive) {
            todoSpan.current.blur();
            if(todoSpan.current.innerText === '') {
                fetchDelete();
            } else {
                fetchEdit(todoSpan.current.innerText);
            };
        };
    };

    function fetchDelete() {
        fetch(`/todos/api/${props.todoId}`, {
            method: 'DELETE'
            })
            .then((res) => {
                console.log(res);
                context.setRenderTodos(true);
            });
    };

    function fetchEdit(newBody) {
        fetch(`/todos/api/${props.todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body: newBody,
                completed: false,
            }),
        })  
        .then((res) => {
            console.log(res);
            context.setRenderTodos(true);
        });
    };

    document.addEventListener('click', todoReset);
    document.addEventListener('keypress', pressEnter);

    return <span
        className={'todo-body-container ' + (props.completed ? 'completed' : '')}
        ref={todoSpan}
        id={props.todoId}
        contentEditable={editActive ? 'true' : 'false'}
        onDoubleClick={() => {
            setEditActive(true);
        }}
        >{props.body}
    </span>             
}                       

