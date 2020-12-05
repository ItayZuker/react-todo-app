import React, {useEffect, useState, useContext} from 'react';
import { FilterDisplayPanel } from './FilterDisplayPanel/FilterDisplayPanel.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './filter-section.scss';
import { appContext } from '../../../../../AppContext.js';

export function FilterSection(props) {

    const context = useContext(appContext)



    let [completed, setCompleted] = useState(null);
    let [moreThenOne, setMoreThenOne] = useState(null);

    useEffect(() => {                                               //////  ---> Update completed state
        if(context.allTodosCompleted) {                                 //       fot this component
            setCompleted(true);                                         //       this array is renderd
        };                                                              //
    }, [context.allTodosCompleted]);                                    //
                                                                        //
    useEffect(() => {                                                   //
        if(context.allTodosNotCompleted) {                              //
            setCompleted(false);                                        //
        };                                                              //
    }, [context.allTodosNotCompleted]);                             //////

    useEffect(() => {                                               //////  ---> Update moreThenOne state
        if(context.newArray[0] === props.listId) {                      //       for this component every time
            if(context.newArray[1].length > 0) {                        //       this array is renderd
                setMoreThenOne(true);                                   //
            } else {                                                    //
                setMoreThenOne(false);                                  //
            };                                                          //
        };                                                              //
    }, [context.newArray]);                                         //////


    return <div
            className='lower-section-container'>
            <h2
                className={moreThenOne > 0 ? 'active ' + (completed ? 'completed' : '') : ''}
                >{props.listName}</h2>
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
    </div>
}
