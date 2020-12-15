import React, {useContext} from 'react';
import { appContext } from '../../../../../../../AppContext';
import './check-todo.scss';

export function CheckTodo(props) {
    
    const context = useContext(appContext);

    return <div
        className='check-todo-container'
        >
        <button
            className={'check ' + (props.todoCompleted ? 'v' : 'x')}
            onClick={() => {                                            //////  ---> Update this todoCompleted state instatnly       
                if(props.todoCompleted) {                                   //       then fetch the update and render this list  
                    context.setTodoCompleted({todoId: props.todoId, completed: false});        //       -
                    context.setListCompleted({listId: props.listId, completed: false});        //       then todoCompleted state is reconfirm or
                    fetch(`/todos/api/todo-false/${props.todoId}`, {        //       chenge back if the fetch hed problem
                        method: "PUT",                                      //       
                    })                                                      //
                    .then((res) => {                                        //
                        console.log(res);                                   //
                        context.setRenderList(props.listId);                //
                    });                                                     //
                } else {                                                    //
                    context.setTodoCompleted({listId: props.listId, todoId: props.todoId, completed: true});         //
                    fetch(`/todos/api/todo-true/${props.todoId}`, {         //
                        method: "PUT",                                      //
                    })                                                      //
                    .then((res) => {                                        //
                        console.log(res);                                   //
                        context.setRenderList(props.listId);            //////
                    });
                }
            }}
        ><i className="fas fa-check"></i>           
        </button>
    </div>
}