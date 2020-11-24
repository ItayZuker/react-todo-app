import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './check-all.scss';

export function CheckAll() {

    const context = useContext(appContext);

    let [allCheck, setAllCheck] = useState(false);
    let [activeButton, setActiveButton] = useState(false);
    
    useEffect(() => {
        context.allTodos > 0 ? setActiveButton(true) : setActiveButton(false); 
        context.allTodos === context.todosCompleted ? setAllCheck(true) : setAllCheck(false);
    }, [context.renderTodos]);

    return <button
            className={'check-all-button ' + (activeButton ? allCheck ? 'all-completed' : 'not-completed' : '')}
            onClick={() => {
            if(allCheck) {

                fetch('/todos/api', {     //
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        completed: false,
                    })                      //  ---> Fetch DataBase to update all todos Not: Completed
                }).then((res) => {                      //
                    console.log(res);                   //
                    setAllCheck(false);                 //
                    context.setRenderTodos(true);       //
                })
            } else {
                                                        
                fetch('/todos/api', {         //
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        completed: true,
                    })                      //    ---> Fetch DataBase to update all todos: Completed
                }).then((res) => {                      //
                    console.log(res);                   //
                    setAllCheck(true);                  //
                    context.setRenderTodos(true);       //
                });
            };
        }}
    >
        {context.allTodos > 0  ? allCheck ? 'x' : 'v' : 'x'}
    </button>
}