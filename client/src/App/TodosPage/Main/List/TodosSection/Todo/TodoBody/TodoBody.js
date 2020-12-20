import React, {useEffect, useState, useContext, useRef} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../../AppContext';
import './todo-body.scss';

export function TodoBody(props) {

    const url = useParams()
    const context = useContext(appContext)
    const thisTodo = useRef()
    const [editActive, setEditActive] = useState(false)
    const [todoCompleted, setTodoCompleted] = useState(props.todoCompleted)

    useEffect(() => {
        setTodoCompleted(props.todoCompleted)
    }, [props.todoCompleted])

    useEffect(() => {
        if(editActive) {
            thisTodo.current.focus();
        }
    }, [editActive])

    function saveUpdate(e) {
        fetch(`/todos/api/save-update/${props.todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                body: e.target.innerText,
                completed: false,
            })
        })
        .then(() => {
            context.setRenderTodos(true)
        })
    }


    return <span
        className={'todo-body-container ' + (todoCompleted ? 'completed' : '')}
        suppressContentEditableWarning={true}
        id={props.todoId}
        ref={thisTodo}
        onDoubleClick={() => {
            setTodoCompleted(false)
            setEditActive(true)
        }}
        onBlur={() => {
            thisTodo.current.innerText = props.todoBody
            setTodoCompleted(props.todoCompleted)
            setEditActive(false);
        }}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                setEditActive(false);
                if(e.target.innerText === '') {
                    context.setDeleteTodo(props.todoId)
                } else {
                    context.listsArray.forEach(list => {
                        if (list._id === url.listId) list.allCompleted = false
                    })
                    context.todosArray.forEach(todo => {
                        if (todo._id === props.todoId) todo.completed = false
                    })
                    saveUpdate(e);
                }
            }
        }}
        contentEditable={editActive ? 'true' : 'false'}
        >{props.todoBody}
    </span>             
}