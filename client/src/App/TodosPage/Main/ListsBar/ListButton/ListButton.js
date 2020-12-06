import React, {useState, useEffect, useContext} from 'react';
import { appContext } from '../../../../../AppContext';
import './list-button.scss';

export function ListButton(props) {

    const context = useContext(appContext);

    // let [selected, setSelected] = useState(null);
    let [active, setActive] = useState(() => props.todos > 0 ? true : false);
    let [completed, setCompleted] = useState(props.completed);


    // useEffect(() => {                                                           //////  ---> Update listCompleted state
    //     if (context.listCompleted[0] === props.listId) {                            //       
    //         context.listCompleted[1] ? setCompleted(true) : setCompleted(false);    //
    //     }                                                                           //
    // }, [context.listCompleted])                                                 //////


    useEffect(() => {                                               //////  ---> Update completed state for this todo
        if(context.allTodosCompleted === props.listId) {                //
            setCompleted(true);                                         //
        }                                                               //
    }, [context.allTodosCompleted])                                     //
                                                                        
    useEffect(() => {                                                   //
        if(context.allTodosNotCompleted === props.listId) {             //
            setCompleted(false);                                        //
        }                                                               //
    }, [context.allTodosNotCompleted])                              //////


    return <div
        className='list-button-container'
        >
        <button
            className={active ? 'active ' + (completed ? 'completed' : '') : ''}
            onClick={() => {context.setSelectedList(props.listId)}}
            >{props.listName}</button>
    </div>
}