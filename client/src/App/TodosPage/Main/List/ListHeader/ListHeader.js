import React, {useContext, useState, useEffect} from 'react';
import {ListMenu} from './ListMenu/ListMenu.js';
import { appContext } from '../../../../../AppContext';
import './list-header.scss';

export function ListHeader(props) {

    const context = useContext(appContext)
    let [listCompleted, setListCompleted] = useState(props.listCompleted);
    let [active, setActive] = useState(null);


    useEffect(() => {                                                                       //////  ---> Update active component state    
        props.list.length > 0 ? setActive(true) : setActive(false);                             //       with data from render
    }, [props.list]);                                                                       //////

    useEffect(() => {                                                                       //////  ---> Update active component state true instantly                                                   //       instantly when creating new todo
        if (context.listActive[0] === props.listId) {                                           //       and update false if no todos after
            context.listActive[1] ? setActive(true) : setActive(false);                         //       fetch list
        }                                                                                       //
    }, [context.listActive])                                                                //////


    useEffect(() => {                                                                       //////  ---> Update listCompleted with
        setListCompleted(props.listCompleted)                                                   //       data from fetch, after rebder
    }, [props.listCompleted])                                                               //////

    useEffect(() => {                                                                       //////  ---> Update listCompleted state
        if (context.listCompleted[0] === props.listId) {                                        //       for this h2 title
            context.listCompleted[1] ? setListCompleted(true) : setListCompleted(false);        //
        }                                                                                       //
    }, [context.listCompleted])                                                             //////
    
    useEffect(() => {                                                                       //////  ---> Update listCompleted stat instantly
        if (context.checkAllCompleted[0] === props.listId) {                                    //       when CheckAll click
            context.checkAllCompleted[1] ? setListCompleted(true) : setListCompleted(false);    //       
        }                                                                                       //
    }, [context.checkAllCompleted])                                                         //////

    return <div
        className='list-header-container'>
        <h2
            className={active ? 'active ' + (listCompleted ? 'completed' : '') : ''}
            >{props.listName}
            </h2>
        <ListMenu
            ></ListMenu>
    </div>
}