import React, { useEffect, useState, useContext } from 'react';
import { appContext } from '../../../../../AppContext.js';
import {CheckAll} from './CheckAll/CheckAll.js';
import {TodoInput} from './TodoInput/TodoInput.js';
import './input-section.scss';

export function InputSection(props) {

    const context = useContext(appContext);

    const [noTodos, setNoTodos] = useState(null);

    useEffect(() => {
        if(props.todosArray.length > 0) {
            setNoTodos(false);
        } else {
            setNoTodos(true);
        };
    }, [props.todosArray]);


    return <div
        className='upper-section-container'>
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
         <h2
            className={noTodos ? '' : 'hide'}
            >Nothing<br/>Todo...</h2>
    </div>
}