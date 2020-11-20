import React from 'react';
import { UpperSection } from './UpperSection/UpperSection.js';
import { TodoList } from './TodoList/TodoList.js';
import { LowerSection } from './LowerSection/LowerSection.js';
import './main.scss';


export function Main() {
    return <div className='main-container'>
            <UpperSection></UpperSection>
            <TodoList></TodoList>
            <LowerSection></LowerSection>
    </div>
}