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
                    fetch('/todos/api/not-completed', {
                        method: 'PUT',
                    })
                    .then((res) => {
                        console.log(res);
                        setAllCheck(false);
                        context.setRenderTodos(true);
                    })
                } else {
                    fetch('/todos/api/completed', {
                        method: 'PUT',
                    })
                    .then((res) => {
                        console.log(res);
                        setAllCheck(true);
                        context.setRenderTodos(true);
                    });
                };
            }}
        >
            {context.allTodos > 0  ? allCheck ? 'x' : 'v' : 'x'}
        </button>
}