import React, {useState, useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../AppContext.js';
import './check-all.scss';

export function CheckAll() {

    const context = useContext(appContext);

    let [allCheck, setAllCheck] = useState(false);
    let [activeButton, setActiveButton] = useState(false);
    
    const allTodos = context.todosArray.length;
    const todosCompleted = (context.todosArray.filter(todo => todo.completed === true).length);

    const user = useParams();

    useEffect(() => {
        allTodos > 0 ? setActiveButton(true) : setActiveButton(false); 
        allTodos === todosCompleted ? setAllCheck(true) : setAllCheck(false);
    }, [context.renderTodos]);

    return <button
            className={'check-all-button ' + (activeButton ? allCheck ? 'all-completed' : 'not-completed' : '')}
            onClick={() => {
            if(allCheck) {

                fetch(`/todos/api/check-all/${user.userId}`, {         //
                    method: 'PUT',                           //
                    headers: {                               //
                        'Content-Type': 'application/json',  //
                    },                                       //
                    body: JSON.stringify({                   //
                        completed: false,                    //
                    })                                       //  ---> Fetch DataBase to update all todos Not: Completed
                }).then((res) => {                           //
                    console.log(res);                        //
                    setAllCheck(false);                      //
                    context.setRenderTodos(true);            //
                })
            } else {
                fetch(`/todos/api/check-all/${user.userId}`, {         //
                    method: 'PUT',                           //
                    headers: {                               //
                        'Content-Type': 'application/json',  //
                    },                                       //
                    body: JSON.stringify({                   //
                        completed: true,                     //
                    })                                       //    ---> Fetch DataBase to update all todos: Completed
                }).then((res) => {                           //
                    console.log(res);                        //
                    setAllCheck(true);                       //
                    context.setRenderTodos(true);            //
                });
            };
        }}
    >
        {allTodos > 0  ? allCheck ? 'x' : 'v' : 'x'}
    </button>
}