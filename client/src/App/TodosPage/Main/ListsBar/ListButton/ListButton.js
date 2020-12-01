import React, {useState, useEffect, useContext} from 'react';
import { appContext } from '../../../../../AppContext';
import './list-button.scss';

export function ListButton(props) {

    const context = useContext(appContext);


    let [completed, setCompleted] = useState(null);
    let [moreThenOne, setMoreThenOne] = useState(null);

    useEffect(() => {                                               //////  ---> Update every time
        if(context.newArray[0] === props.listId) {                      //       this array is updated
            if(context.newArray[1].length > 0) {                        //
                setMoreThenOne(true);                                   //
            } else {                                                    //
                setMoreThenOne(false);                                  //
            };                                                          //
        };                                                              //
    }, [context.newArray]);                                         //////


    useEffect(() => {
        if(context.allTodosCompleted === props.listId) {
            setCompleted(true);
        }
    }, [context.allTodosCompleted])


    useEffect(() => {
        if(context.allTodosNotCompleted === props.listId) {
            setCompleted(false);
        }
    }, [context.allTodosNotCompleted])


    return <div
        className='list-button-container'
        >
        <button
            className={moreThenOne ? 'active ' + (completed ? 'completed' : '') : ''}
            >{props.listName}</button>
    </div>
}