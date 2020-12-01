import React, { useEffect, useState, useContext } from 'react';
import { appContext } from '../../../../../AppContext.js';
import {CheckAll} from './CheckAll/CheckAll.js';
import {TodoInput} from './TodoInput/TodoInput.js';
import './upper-section.scss';

export function UpperSection(props) {

    const context = useContext(appContext);

    let [completed, setCompleted] = useState(null);
    let [moreThenOne, setMoreThenOne] = useState(null);


    useEffect(() => {                                               //////  ---> Update moreThenOne state
        if(context.newArray[0] === props.listId) {                      //       for this component every time
            if(context.newArray[1].length > 0) {                        //       this array is renderd
                setMoreThenOne(true);                                   //
            } else {                                                    //
                setMoreThenOne(false);                                  //
            };                                                          //
        };                                                              //
    }, [context.newArray]);                                         //////


    useEffect(() => {                                               //////  ---> Update completed state
        if(context.allTodosCompleted) {                                 //       fot this component
            setCompleted(true);                                         //       this array is renderd
        };                                                              //
    }, [context.allTodosCompleted]);                                    //
                                                                        //
    useEffect(() => {                                                   //
        if(context.allTodosNotCompleted) {                              //
            setCompleted(false);                                        //
        };                                                              //
    }, [context.allTodosNotCompleted]);                             //////


    return <div
        className='upper-section-container'>
        <h2
            className={moreThenOne > 0 ? 'active ' + (completed ? 'completed' : '') : ''}
            >{props.listName}</h2>
        <div
            className='check-all-input-container'
            >
            <CheckAll
                listId={props.listId}
                todosArray={props.todosArray}
                ></CheckAll>
            <TodoInput
                userId={props.userId}
                listId={props.listId}
                todosArray={props.todosArray}
                ></TodoInput>
        </div>
    </div>
}