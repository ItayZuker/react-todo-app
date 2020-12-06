import React from 'react';
import {CheckAll} from './CheckAll/CheckAll.js';
import {TodoInput} from './TodoInput/TodoInput.js';
import './input-section.scss';

export function InputSection(props) {

    return <div
        className='upper-section-container'>
        <div
            className='check-all-input-container'
            >
            <CheckAll
                listId={props.listId}
                list={props.list}
                listCompleted={props.listCompleted}
                ></CheckAll>
            <TodoInput
                userId={props.userId}
                listId={props.listId}
                list={props.list}
                ></TodoInput>
        </div>
         <h2
            className={props.list.length > 0 ? 'hide' : ''}
            >Nothing<br/>Todo...</h2>
    </div>
}