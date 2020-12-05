import React, {useState, useEffect, useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './check-all.scss';

export function CheckAll(props) {

    const context = useContext(appContext);

    let [allCompleted, setAllCompleted] = useState(false);
    let [buttonActive, setButtonActive] = useState(false);


    useEffect(() => {                                                                             //////  ---> Update active component state    
            props.todosArray.length > 0 ? setButtonActive(true) : setButtonActive(false);             //       for every todosArray.length change
    }, [props.todosArray]);                                                                       //////       


    useEffect(() => {                                          ////// ---> Update allCompleted state for this
        if(context.allTodosCompleted === props.listId) {           //      for this component: true
            setAllCompleted(true);                                 //      -
            context.setAllTodosCompleted('');                      //      Activeted at List component
        };                                                         //      after every render
    }, [context.allTodosCompleted]);                           //////      


    useEffect(() => {                                          ////// ---> Update allCompleted state for this
        if(context.allTodosNotCompleted === props.listId) {        //      for this component: true
            setAllCompleted(false);                                //      -
            context.setAllTodosNotCompleted('');                   //      Activeted at List component after every render
        };                                                         //      or at CheckTodo component 
    }, [context.allTodosNotCompleted]);                        //////      when updated completed: false


    return <button
        className={'all-green-button ' + (buttonActive ? allCompleted ? 'true' : 'false' : 'not-active')}
        onClick={() => {
            if(allCompleted) {                                                                     //////  ---> When clicked, if all todos are completed
                context.checkAllNotCompleted(props.listId);                                            //       they all become not completed and viceversa
                fetch(`/todos/api/all-todos-completed-false/${props.listId}`, {                        //       and then render this todos list
                    method: 'PUT',                                                                     //       -
                })                                                                                     //       The visual state is updatetd before
                .then((res) => {                                                                       //       the fetch and then confirmed after 
                    console.log(res);                                                                  //       the list renders with the props value
                    context.setRenderList(props.listId)                                                //
                });                                                                                    //
            } else {                                                                                   //
                context.checkAllCompleted(props.listId);                                               //
                fetch(`/todos/api/all-todos-completed-true/${props.listId}`, {                         //
                    method: 'PUT',                                                                     //
                })                                                                                     //
                .then((res) => {                                                                       //
                    console.log(res);                                                                  //
                    context.setRenderList(props.listId)                                                //
                });                                                                                    //
            };                                                                                         //
        }}                                                                                         //////
        >
        {props.todosArray.length > 0  ? allCompleted ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
    </button>
}