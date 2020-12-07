import React, {useEffect, useState, useContext} from 'react';
import { FilterDisplayPanel } from './FilterDisplayPanel/FilterDisplayPanel.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './filter-section.scss';
import { appContext } from '../../../../../AppContext.js';

export function FilterSection(props) {

    const context = useContext(appContext)
    let [active, setActive] = useState(null);


    useEffect(() => {                                                                       //////  ---> Update active component state    
        props.list.length > 0 ? setActive(true) : setActive(false);                             //       with data from render
    }, [props.list]);                                                                       //////

    useEffect(() => {                                                                       //////  ---> Update active component state true instantly                                                   //       instantly when creating new todo
        if (context.listActive[0] === props.listId) {                                           //       and update false if no todos after
            context.listActive[1] ? setActive(true) : setActive(false);                         //       fetch list
        }                                                                                       //
    }, [context.listActive])                                                                //////

    
    return <div className='filter-section-container'>
        <Counter
            list={props.list}
            active={active}
            listId={props.listId}
            ></Counter>
        <FilterDisplayPanel
            listId={props.listId}
            list={props.list}
            active={active}
            ></FilterDisplayPanel>
        <ClearCompleted
            listId={props.listId}
            list={props.list}
            active={active}
        ></ClearCompleted>
    </div>
}
