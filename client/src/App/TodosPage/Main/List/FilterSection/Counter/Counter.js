import React, { useEffect, useState, useContext } from 'react';
import { appContext } from '../../../../../../AppContext';
import './counter.scss';

export function Counter(props) {

    const context = useContext(appContext)

    let [notCompletedTodos, setNotCompletedTodos] = useState(props.list.filter(todo => todo.completed === false).length)


    useEffect(() => {                                                                       //////  ---> Update notCompletedTodos number
        setNotCompletedTodos(props.list.filter(todo => todo.completed === false).length)        //       with data from fetch
    }, [props.list])                                                                        //////

    useEffect(() => {                                                                       //////  ---> Update notCompletedTodos to zero
        if (context.checkAllCompleted[0] === props.listId) {                                    //       instantly when CheckAll click
            if (context.checkAllCompleted[1]) setNotCompletedTodos(0)                           //       
        }                                                                                       //
    }, [context.checkAllCompleted])                                                         //////


    return <div
        className='counter-container'>
        <p
            className={props.active ? 'active' : ''}
            ><span
                className={props.active ? notCompletedTodos > 0 ? 'red' : 'green' : ''}
            >
            {notCompletedTodos}</span> left
        </p>
    </div>
}