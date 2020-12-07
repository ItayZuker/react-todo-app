import React, {useState, useEffect, useContext} from 'react';
import { appContext } from '../../../../../AppContext';
import './list-button.scss';

export function ListButton(props) {

    const context = useContext(appContext);

    // let [selected, setSelected] = useState(null);
    let [listActive, setListActive] = useState(false)
    let [listCompleted, setListCompleted] = useState(props.listCompleted);


    useEffect(() => {                                                                       //////  ---> Update active state for
        props.todos > 0 ? setListActive(true) : setListActive(false);                           //       this list after render
    }, [props.todos])                                                                       //////

    useEffect(() => {                                                                       //////  ---> Update active component state true instantly                                                   //       instantly when creating new todo
        if (context.listActive[0] === props.listId) {                                           //       and update false if no todos after
            context.listActive[1] ? setListActive(true) : setListActive(false);                 //       fetch list
        }                                                                                       //
    }, [context.listActive])                                                                //////


    useEffect(() => {                                                                       //////  ---> Update listCompleted state for
        setListCompleted(props.listCompleted)                                                   //       this list after render
    }, [props.listCompleted])                                                               //////

    useEffect(() => {                                                                       //////  ---> Update listCompleted state 'false' instantly
        if (context.listCompleted[0] === props.listId) {                                        //       when CheckTodo click
            context.listCompleted[1] ? setListCompleted(true) : setListCompleted(false);        //       and update 'true' after list render
        }                                                                                       //
    }, [context.listCompleted])                                                             //////

    useEffect(() => {                                                                       //////  ---> Update completed stat instantly
        if (context.checkAllCompleted[0] === props.listId) {                                    //       when CheckAll click
            context.checkAllCompleted[1] ? setListCompleted(true) : setListCompleted(false);    //       
        }                                                                                       //
    }, [context.checkAllCompleted])                                                         //////


    return <div
        className='list-button-container'
        >
        <button
            className={listActive ? 'active ' + (listCompleted ? 'completed' : '') : ''}
            onClick={() => {context.setSelectedList(props.listId)}}
            >{props.listName}</button>
    </div>
}