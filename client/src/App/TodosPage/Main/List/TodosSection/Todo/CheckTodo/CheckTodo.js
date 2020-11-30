import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../../../AppContext';
import './check-todo.scss';

export function CheckTodo(props) {
    
    const context = useContext(appContext);

    // let [completed, setCompleted] = useState(props.completed);


    // useEffect(() => {                                           //
    //     setCompleted(props.completed)                           //  ---> This is to update visual completed state
    // }, [props.completed])                                       //       without cossing conflict with visual state
    //                                                             //       updates from context

    
    // useEffect(() => {                                           //
    //     if(context.allCompleted === props.listId) {             //  ---> This is for visual state quick response
    //         context.setAllCompleted('');                        //       -
    //         setCompleted(true);                                 //       Activeted at CheckAll component
    //     };                                                      //       
    // }, [context.allCompleted]);                                 //
    //                                                             //
    // useEffect(() => {                                           //
    //     if(context.allNotCompleted === props.listId) {          //
    //         context.setAllNotCompleted('');                     //
    //         setCompleted(false);                                //
    //     };                                                      //
    // }, [context.allNotCompleted]);                              //





    return <div
        className='check-todo-container'
        >
        <button
            className={'check ' + (props.completed ? 'v' : 'x')}
            onClick={() => {                                             //
                if(props.completed) {                                          //  ---> Update this todo completed state       
                    context.setTodoNotCompleted(props.todoId);           //       false if true and viceversa and then
                    context.setAllTodosNotCompleted(props.listId);
                    // setCompleted(false);                                 //       call to render this list
                    fetch(`/todos/api/todo-false/${props.todoId}`, {     //       -
                        method: "PUT",                                   //       the visual state would be updated
                    })                                                   //       before the fetch for quick response 
                    .then((res) => {                                     //       but would be confirmed after the render
                        console.log(res);                                //
                        context.setRenderList(props.listId);             //
                    });                                                  //
                } else {                                                 //
                    context.setTodoCompleted(props.todoId);              //
                    // setCompleted(true);                                  //
                    fetch(`/todos/api/todo-true/${props.todoId}`, {      //
                        method: "PUT",                                   //
                    })                                                   //
                    .then((res) => {                                     //
                        console.log(res);                                //
                        context.setRenderList(props.listId);             //
                    });
                }
            }}
        >v</button>
    </div>
}