import React, { useEffect, useState } from 'react';
import { FilterDisplayPanel } from './FilterDisplayPanel/FilterDisplayPanel.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './lower-section.scss';

export function LowerSection(props) {

    const [noTodos, setNoTodos] = useState(null);

    useEffect(() => {
        if(props.todosArray.length > 0) {
            setNoTodos(false);
        } else {
            setNoTodos(true);
        };
    }, [props.todosArray]);


    return <div className='lower-section-container'>
        <div className='lower-pannel'>
            <Counter
                todosArray={props.todosArray}
                ></Counter>
            <FilterDisplayPanel
                listId={props.listId}
                todosArray={props.todosArray}
                ></FilterDisplayPanel>
            <ClearCompleted
                listId={props.listId}
                todosArray={props.todosArray}
            ></ClearCompleted>
        </div>
        <h2
            className={noTodos ? '' : 'hide'}
            >Nothing<br/>Todo...</h2>
    </div>
}
