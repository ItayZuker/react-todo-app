import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './todo-body.scss';

export function TodoBody(props) {

    const context = useContext(appContext);

    const [editActive, setEditActive] = useState(false);

    const user = useParams();

    const thisTodo = document.getElementById(props.todoId);

    useEffect(() => {                                               // ---> If there was a change in active state
        if(thisTodo !== null) {                                     // ---> If document.thisTodo was activeted
            editActive ? thisTodo.focus() : thisTodo.blur();        // ---> Update focus
        }
    }, [editActive]);

    function fetchDelete() {                                        // ---> Fetch ---> Delete todo & render list
        fetch(`/todos/api/${props.todoId}`, {
            method: 'DELETE'
            })
            .then((res) => {
                console.log(res);
                context.setRenderTodos(true);
            });
    };

    function fetchEdit(newBody) {                                   // ---> Fetch ---> Update todo & render list
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

    function blurTodo(e) {                                          // ---> On mouse click
        if(window.location.pathname.indexOf(user.userId) !== -1) {  // ---> If this is this users todo page
            if(thisTodo !== null) {                                 // ---> If document.thisTodo was activeted 
                if(thisTodo.innerText !== props.body) {
                    thisTodo.innerText = props.body;                // ---> If todo was edit ---> Reset text
                    setEditActive(false);                           // ---> Set edit false
                }
                    setEditActive(false);                           // ---> If todo was just double clicked ---> Set edit false 
            };    
        };
    };

    function pressEnter(e) {                                        // ---> On key press
        if(window.location.pathname.indexOf(user.userId) !== -1) {  // ---> If this is todo page
            if(e.charCode === 13) {                                 // ---> If enter was press
                if(editActive) {                                    // ---> If this todo was double clicked
                    setEditActive(false);                           // ---> Set edit false
                    if(thisTodo.innerText === '') {
                        fetchDelete();                              // ---> If text was deleted ---> Delete todo
                    } else {
                        fetchEdit(thisTodo.innerText);              // ---> If text was change ---> Update todo
                    };
                };
            };
        };
    };

    document.addEventListener('click', blurTodo);
    document.addEventListener('keypress', pressEnter);

    return <span
        className={'todo-body-container ' + (props.completed ? 'completed' : '')}
        id={props.todoId}
        onDoubleClick={() => {
            setEditActive(true);
        }}
        contentEditable={editActive ? 'true' : 'false'}
        >{props.body}
    </span>             
}