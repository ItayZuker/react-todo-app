import React, {useEffect, useState, useContext} from 'react';
import { FilterDisplayPanel } from './FilterDisplayPanel/FilterDisplayPanel.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './filter-section.scss';
import { appContext } from '../../../../../AppContext.js';

export function FilterSection(props) {

    const context = useContext(appContext)
    let [listCompleted, setListCompleted] = useState(null)
    let [active, setButtonActive] = useState(null);


    useEffect(() => {                                                                   //////  ---> Update active component state    
        props.list.length > 0 ? setButtonActive(true) : setButtonActive(false);             //       for every list.length change
    }, [props.list]);                                                                   //////


    useEffect(() => {                                                                   //////  ---> Update listCompleted state
        if (context.listCompleted[0] === props.listId) {                                    //       for this h2 title
            context.listCompleted[1] ? setListCompleted(true) : setListCompleted(false);    //
        }                                                                                   //
    }, [context.listCompleted])                                                         //////

    return <div
            className='upper-section-container'>
            <h2
                className={active > 0 ? 'active ' + (listCompleted ? 'completed' : '') : ''}
                >{props.listName}</h2>
        <div className='filter-data-pannel'>
            <Counter
                list={props.list}
                ></Counter>
            <FilterDisplayPanel
                listId={props.listId}
                list={props.list}
                ></FilterDisplayPanel>
            <ClearCompleted
                listId={props.listId}
                list={props.list}
            ></ClearCompleted>
        </div>
    </div>
}
