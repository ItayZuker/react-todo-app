import React, {useState, useEffect, useContext} from 'react';
import {CheckTodo} from './CheckTodo/CheckTodo.js';
import {TodoBody} from './TodoBody/TodoBody.js';
import {DeleteButton} from './DeleteButton/DeleteButton.js';
import {appContext} from '../../../../../../AppContext';
import './todo.scss';

export function Todo(props) {
    
    const context = useContext(appContext);

    const [displayStatus, setDisplayStatus] = useState(null);
    const [deleteTodo, setDeleteTodo] = useState(false);
    const [completed, setCompleted] = useState(props.completed);
    const [TaDam, setTaDam] = useState(false);


    useEffect(() => {                                           //////  ---> Trigers delete function for
        if(context.clearCompletedClick === props.listId) {          //       this todo if completed
            if(props.completed) {                                   //       -
                context.setClearCompletedClick('');                 //       Activeted by ClearCompleted componnet
                setDeleteTodo(true);                                //
            };                                                      //
        };                                                          //
    }, [context.clearCompletedClick]);                          //////


    useEffect(() => {                                           //////  ---> Trigers delete function for
        if(context.deleteTodo === props.todoId) {                   //       this todo
            context.setDeleteTodo('');                              //       -
            setDeleteTodo(true);                                    //       Activeted at DeleteButton componnet
        };                                                          //       
    }, [context.deleteTodo]);                                   //////       


    useEffect(() => {                                           //////  ---> This is for visual state quick response
        if(context.todoCompleted === props.todoId) {                //       render update will follow props.completed
            setCompleted(true);                                     //       -
            context.setTodoCompleted('');                           //       Activeted at CheckTodo component
        };                                                          //       
    }, [context.todoCompleted]);                                //////


    useEffect(() => {                                           //////  ---> This is for visual state quick response
        if(context.todoNotCompleted === props.todoId) {             //       render update will follow props.completed
            setCompleted(false);                                    //       -
            context.setTodoNotCompleted('');                        //       Activeted at CheckTodo component
        }                                                           //
    }, [context.todoNotCompleted]);                             //////


    useEffect(() => {                                           //////  ---> This is for visual state quick response
        if(context.allCompleted === props.listId) {                 //       render update will follow props.completed
            setCompleted(true);                                     //       -
            context.checkAllCompleted('');                          //       Activeted at CheckAll component
        };                                                          //       
    }, [context.allCompleted]);                                 //////
                                                                

    useEffect(() => {                                           //////  ---> This is for visual state quick response
        if(context.allNotCompleted === props.listId) {              //       render update will follow props.completed
            setCompleted(false);                                    //       -
            context.checkAllNotCompleted('');                       //       Activeted at CheckAll component
        };                                                          //
    }, [context.allNotCompleted]);                              //////


    useEffect(() => {                                                           //////  ---> Delete this todo with deley  
        if(deleteTodo) {                                                            //       to give time for the banner - 'TaDam!'
            setTaDam(true);                                                         //       -
            setTimeout(() => setTaDam(false), 1500);                                //       Activeted by ClearCompleted component
            setTimeout(() => {                                                      //       or by DeleteButton component
                fetch(`/todos/api/delete-todo/${props.todoId}`, {                   //       
                    method: 'DELETE'                                                //       
                    })                                                              //
                    .then((res) => {                                                //
                        console.log(res);                                           //
                        context.setRenderList(props.listId);                        //
                    });                                                             //
            }, 1000)                                                                //
        };                                                                          //
    }, [deleteTodo])                                                            //////


    useEffect(() => {                                                           //////  ---> Update display state for this
        if(context.displayListState[0] === props.listId) {                          //       todo component
            if(context.displayListState[1] === 'active') {                          //       -
                completed ? setDisplayStatus(false) : setDisplayStatus(true);       //       Activeted at FilterDisplayPanel
            } else if(context.displayListState[1] === 'completed') {                //       component, and update when
                completed ? setDisplayStatus(true) : setDisplayStatus(false);       //       list is renderd
            } else {                                                                //
                setDisplayStatus(true);                                             //
            }                                                                       //
        } else {                                                                    //
            setDisplayStatus(true);                                                 //
        }                                                                           //
    }, [context.displayListState, context.renderList]);                         //////


    return <div
        className={'todo-container ' + (displayStatus ? '' : 'hide')}
        >
        <div
            className={'tadam-contaoner ' + (TaDam ? 'active' : '')}>
            <h3>{TaDam ? 'TaDam!' : ''}</h3>
        </div>
        <div
            className={'todo-components-container ' + (TaDam ? 'hide' : '')}
            >
            <CheckTodo
                todoId={props.todoId}
                listId={props.listId}
                completed={completed}
                ></CheckTodo>
            <TodoBody
                userId={props.listId}
                listId={props.listId}
                todoId={props.todoId}
                body={props.body}
                completed={completed}
                ></TodoBody>
            <DeleteButton
                listId={props.listId}
                todoId={props.todoId}
                ></DeleteButton>
        </div>
    </div>
}