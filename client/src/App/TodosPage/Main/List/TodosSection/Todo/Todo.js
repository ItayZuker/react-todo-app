import React, {useState, useEffect, useContext} from 'react';
import {CheckTodo} from './CheckTodo/CheckTodo.js';
import {TodoBody} from './TodoBody/TodoBody.js';
import {OpenDetails} from './OpenDetails/OpenDetails.js';
import {TodoDetails} from './TodoDetails/TodoDetails.js';
import {appContext} from '../../../../../../AppContext';
import './todo.scss';

export function Todo(props) {

    console.log(typeof props.created)

    const context = useContext(appContext);

    const [displayStatus, setDisplayStatus] = useState(null);
    const [deleteTodo, setDeleteTodo] = useState(false);
    const [todoCompleted, setTodoCompleted] = useState(props.todoCompleted);
    const [openDetails, setOpenDetails] = useState(false)
    const [TaDam, setTaDam] = useState(false);


    useEffect(() => {                                                                       //////  ---> Update todoCompleted state when 
        setTodoCompleted(props.todoCompleted)                                                   //       update coming from props
    }, [props.todoCompleted])                                                               //////


    useEffect(() => {                                                                       //////  ---> Update todoCompleted stat
        if (context.todoCompleted[0] === props.todoId) {                                        //       when CheckTodo click
            context.todoCompleted[1] ? setTodoCompleted(true) : setTodoCompleted(false);        //
            context.setTodoCompleted([])                                                        //
        }                                                                                       //
    }, [context.todoCompleted])                                                             //////

    useEffect(() => {                                                                       //////  ---> Update todoCompleted stat
        if (context.checkAllCompleted[0] === props.listId) {                                    //       when CheckAll click
            context.checkAllCompleted[1] ? setTodoCompleted(true) : setTodoCompleted(false);    //       
        }                                                                                       //
    }, [context.checkAllCompleted])                                                         //////

    useEffect(() => {                                                                       //////  ---> Trigers delete function for
        if(context.clearCompletedClick === props.listId) {                                      //       this todo if completed
            if(todoCompleted) {                                                                 //       -
                context.setClearCompletedClick('');                                             //       Activeted by ClearCompleted componnet
                setDeleteTodo(true);                                                            //
            };                                                                                  //
        };                                                                                      //
    }, [context.clearCompletedClick]);                                                      //////


    useEffect(() => {                                                                       //////  ---> Trigers delete function for
        if(context.deleteTodo === props.todoId) {                                               //       this todo
            context.setDeleteTodo('');                                                          //       -
            setDeleteTodo(true);                                                                //       Activeted at DeleteButton componnet
        };                                                                                      //       
    }, [context.deleteTodo]);                                                               //////       

    useEffect(() => {                                                                       //////  ---> Delete this todo with deley  
        if(deleteTodo) {                                                                        //       to give time for the banner - 'TaDam!'
            setTaDam(true);                                                                   //       -
            setTimeout(() => setTaDam(false), 1500);                                            //       Activeted by ClearCompleted component
            setTimeout(() => {                                                                  //       or by DeleteButton component
                fetch(`/todos/api/delete-todo/${props.todoId}`, {                               //       
                    method: 'DELETE'                                                            //       
                    })                                                                          //
                    .then((res) => {                                                            //
                        console.log(res);                                                       //
                        context.setRenderList(props.listId);                                    //
                    });                                                                         //
            }, 1000)                                                                            //
        };                                                                                      //
    }, [deleteTodo])                                                                        //////


    useEffect(() => {                                                                       //////  ---> Update display state for this
        if(context.displayListState[0] || context.renderList === props.listId) {                //       todo component
            if(context.displayListState[1] === 'active') {                                      //       -
                todoCompleted ? setDisplayStatus(false) : setDisplayStatus(true);               //       Activeted at FilterDisplayPanel
            } else if(context.displayListState[1] === 'completed') {                            //       component, and update when
                todoCompleted ? setDisplayStatus(true) : setDisplayStatus(false);               //       list is renderd
            } else {                                                                            //
                setDisplayStatus(true);                                                         //
            }                                                                                   //
        } else {                                                                                //
            setDisplayStatus(true);                                                             //
        }                                                                                       //
    }, [context.displayListState, context.renderList]);                                     //////


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
            <div className='todo-main'>
                <CheckTodo
                    todoId={props.todoId}
                    listId={props.listId}
                    todoCompleted={todoCompleted}
                ></CheckTodo>
                <TodoBody
                    userId={props.userId}
                    listId={props.listId}
                    todoId={props.todoId}
                    body={props.body}
                    todoCompleted={todoCompleted}
                    ></TodoBody>
                <OpenDetails
                    openDetails={openDetails}
                    setOpenDetails={() => setOpenDetails(!openDetails)}
                    ></OpenDetails>
            </div>
            <TodoDetails
                todoId={props.todoId}
                created={props.created}
                openDetails={openDetails}
                setDeleteTodo={() => setDeleteTodo(true)}
                ></TodoDetails>
        </div>
    </div>
}