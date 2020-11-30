import React from 'react';
import {CheckAll} from './CheckAll/CheckAll.js';
import {TodoInput} from './TodoInput/TodoInput.js';
import './upper-section.scss';

export function UpperSection(props) {

    return <div className='upper-section-container'>
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
}