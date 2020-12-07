import React, {useContext, useEffect, useState} from 'react';
import { appContext } from '../../../../../../AppContext';
import './clear-completed.scss';

export function ClearCompleted(props) {

    const context = useContext(appContext);

    let [someCompleted, setSomeCompleted] = useState(false)

    useEffect(() => {                                                                       //////  ---> Update someCompleted state 'true'
        if (context.todoCompleted[2] === props.listId) {                                        //       instantly when checkTodo component
            if (context.todoCompleted[1]) {                                                     //       in this list is set completed
                setSomeCompleted(true)                                                          //
            }                                                                                   //
        }                                                                                       //
    }, [context.todoCompleted])                                                             //////

    useEffect(() => {                                                                       //////  ---> Update someCompleted state
        if (props.list.filter(todo => todo.completed === true).length > 0) {                    //       with data from fetch
            setSomeCompleted(true)                                                              //
        } else {                                                                                //
            setSomeCompleted(false)                                                             //
        }                                                                                       //
    }, [props.list])                                                                        //////

    useEffect(() => {                                                                       //////  ---> Update completed stat instantly
        if (context.checkAllCompleted[0] === props.listId) {                                    //       when CheckAll click
            context.checkAllCompleted[1] ? setSomeCompleted(true) : setSomeCompleted(false);    //
        }                                                                                       //
    }, [context.checkAllCompleted])                                                         //////


    return <button 
        className={'clear-complited-container ' + (props.active ? 'active ' + (someCompleted ? 'clicker' : '') : '')}
        onClick={() => context.setClearCompletedClick(props.listId)}                                                                      //         //       completed todos in this list
        >
        <p>Clear</p>

    </button>
}