import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './check-all.scss';



export function CheckAll() {

    const context = useContext(appContext);

    let [allCheck, setAllCheck] = useState(false);
    let [activeButton, setActiveButton] = useState(false);

    useEffect(() => {
        context.allTodos > 0 ? setActiveButton(true) : setActiveButton(false); 
    }, [context.renderList]);

    useEffect(() => {
        context.allTodos === context.todosComplited ? setAllCheck(true) : setAllCheck(false);
    }, [context.renderList]);

    return <button
                className={'check-all-button ' + (activeButton ? allCheck ? 'all-complited' : 'not-complited' : '')}
                onClick={() => {
                if(allCheck) {
                    fetch('/todos/api/not-complited', {
                        method: 'PUT',
                    })
                    .then((res) => {
                        console.log(res);
                        setAllCheck(false);
                        context.setRenderList(true); // call to render all todos ---> complited: false
                    })
                } else {
                    fetch('/todos/api/complited', {
                        method: 'PUT',
                    })
                    .then((res) => {
                        console.log(res);
                        setAllCheck(true);
                        context.setRenderList(true); // call to render all todos ---> complited: true
                    });
                };
            }}
        >
            {context.allTodos > 0  ? allCheck ? 'x' : 'v' : 'x'}
        </button>
}