import React, { useState, useEffect, useContext } from 'react';
import { CheckTodo } from './CheckTodo/CheckTodo.js';
import { TodoBody } from './TodoBody/TodoBody.js';
import { DeleteTodoButton } from './DeleteTodoButton/DeleteTodoButton.js';
import { appContext } from '../../../../../AppContext.js';
import './todo-item.scss';



export function TodoItem(props) {

    
    const context = useContext(appContext);

    const [displayStatus, setDisplayStatus] = useState(null);
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {                                     //  
        if(deleted) {                                     //  ---> When setDeleted function is activeted with 'true' value
            setTimeout(() => {                            //       Thrghu props at DeleteTodo component,
                fetch(`/todos/api/${props.todoId}`, {     //       It activets this fetch to delete this todo.
                    method: 'DELETE',                     //       The purpes is to deley for the closin banner - 'TaDam!'
                    })                                    //       
                    .then((res) => {                      //       
                        console.log(res);                 //  
                        context.setRenderTodos(true);     //
                    });                                   //
            }, 2000)                                       //  
        };                                                //
    }, [deleted])                                         //

    useEffect(() => {                                                            //
        if(context.displayTodos === 'active') {                                  //  ---> Update display state for this todo
            props.completed ? setDisplayStatus(false) : setDisplayStatus(true);  //
        } else if(context.displayTodos === 'complited') {                        //
            props.completed ? setDisplayStatus(true) : setDisplayStatus(false);  //
        } else {                                                                 //
            setDisplayStatus(true);                                              //
        };                                                                       //
    }, [context.displayTodos, context.renderTodos]);                             //

    return <div
        className={'todo-item-container'}
        >
        <div
            className={'tadam-contaoner ' + (deleted ? 'active' : '')}>
            <h3>{deleted ? 'TaDam!' : ''}</h3>
        </div>
        <div
            className={'todo-components-container ' + (displayStatus ? '' : 'hide') + (deleted ? 'hide' : '')}
            >
            <CheckTodo
                todoId={props.todoId}
                body={props.body}
                completed={props.completed}
                ></CheckTodo>
            <TodoBody
                userId={props.userId}
                todoId={props.todoId}
                body={props.body}
                completed={props.completed}
                ></TodoBody>
            <DeleteTodoButton
                todoId={props.todoId}
                showTaDam={() => setDeleted(true)}
                ></DeleteTodoButton>
        </div>
    </div>
}