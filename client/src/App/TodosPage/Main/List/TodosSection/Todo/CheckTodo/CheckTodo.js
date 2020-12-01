import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../../../AppContext';
import './check-todo.scss';

export function CheckTodo(props) {
    
    const context = useContext(appContext);

    return <div
        className='check-todo-container'
        >
        <button
            className={'check ' + (props.completed ? 'v' : 'x')}
            onClick={() => {                                         //////  ---> Update this todo completed state       
                if(props.completed) {                                    //       false if true and viceversa and then   
                    context.setTodoNotCompleted(props.todoId);           //       call to render this list
                    fetch(`/todos/api/todo-false/${props.todoId}`, {     //       -
                        method: "PUT",                                   //       the visual state would be updated
                    })                                                   //       before the fetch for quick response 
                    .then((res) => {                                     //       (but would be confirmed after the render??)
                        console.log(res);                                //
                        context.setRenderList(props.listId);             //
                    });                                                  //
                } else {                                                 //
                    context.setTodoCompleted(props.todoId);              //
                    fetch(`/todos/api/todo-true/${props.todoId}`, {      //
                        method: "PUT",                                   //
                    })                                                   //
                    .then((res) => {                                     //
                        console.log(res);                                //
                        context.setRenderList(props.listId);         //////
                    });
                }
            }}
        >v</button>
    </div>
}