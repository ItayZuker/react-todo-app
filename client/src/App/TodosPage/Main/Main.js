import React from 'react';
import { UpperSection } from './UpperSection/UpperSection.js';
import { TodoList } from './TodoList/TodoList.js';
import { LowerSection } from './LowerSection/LowerSection.js';
import './main.scss';


export function Main(props) {
    return <div className='main-container'>
            <UpperSection userId={props.userId}></UpperSection>
            <TodoList userId={props.userId}></TodoList>
            <LowerSection></LowerSection>
    </div>
}