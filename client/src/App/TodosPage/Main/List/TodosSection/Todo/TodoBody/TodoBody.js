import React, {useEffect, useState, useContext, useRef} from 'react';
import { appContext } from '../../../../../../../AppContext';
import './todo-body.scss';

export function TodoBody(props) {

    const context = useContext(appContext);

    const [editActive, setEditActive] = useState(false);

    const thisTodo = useRef();
    
    useEffect(() => {                                           //////  ---> Set focus on this todo
        if(editActive) {                                            //       after it become editActive
            thisTodo.current.focus();                               //
        }                                                           //
    }, [editActive]);                                           //////


    document.addEventListener('click', resetTodo);              
                                                                
    function resetTodo(e) {                                     //////  ---> Reset this todo's body
        if(thisTodo.current !== null) {                             //       if click outside befour submit
            if(context.editActive === props.todoId) {               //
                context.setEditActive('');                          //
                if(e.target.id !== props.todoId) {                  //
                    thisTodo.current.innerText = props.body;        //
                    setEditActive(false);                           //
                };                                                  //
            };                                                      //
        };                                                          //
    };                                                          //////


    document.addEventListener('keypress', pressEnter);          
                                                                    
    function pressEnter(e) {                                    ////// ---> Submit the change for this todo
        if(thisTodo.current !== null) {                             //      when press Enter
            if(e.charCode === 13) {                                 //
                if(editActive) {                                    //
                    setEditActive(false);                           //
                    if(thisTodo.current.innerText === '') {         //
                        context.setDeleteTodo(props.todoId);        //
                    } else {                                        //
                        saveUpdate();                               //
                    };                                              //
                };                                                  //
            };                                                      //
        };                                                          //
    };                                                          //////


    function saveUpdate() {                                     //////  ---> function to save this todo update
        fetch(`/todos/api/save-update/${props.todoId}`, {           //
            method: 'PUT',                                          //
            headers: {                                              //
                'Content-Type': 'application/json',                 //
            },                                                      //
            body: JSON.stringify({                                  //
                body: thisTodo.current.innerText,                   //
                completed: false,                                   //
            })                                                      //
        })                                                          //
        .then((res) => {                                            //
            console.log(res);                                       //
            context.setRenderList(true);                            //
        });                                                         //
    };                                                          //////


    return <span
        className={'todo-body-container ' + (props.todoCompleted ? 'completed' : '')}
        suppressContentEditableWarning={true}
        id={props.todoId}
        ref={thisTodo}
        onDoubleClick={() => {
            context.setEditActive(props.todoId);
            setEditActive(true);
        }}
        contentEditable={editActive ? 'true' : 'false'}
        >{props.body}
    </span>             
}