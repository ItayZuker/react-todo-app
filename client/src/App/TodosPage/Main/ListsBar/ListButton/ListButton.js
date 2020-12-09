import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { appContext } from '../../../../../AppContext';
import './list-button.scss';

export function ListButton(props) {

    const context = useContext(appContext);
    const url = useParams()
    const [selectedList, setSelectedList] = useState(true);
    const [listActive, setListActive] = useState(false)
    const [listCompleted, setListCompleted] = useState(props.listCompleted);
    const [listDeleted, setListDeleted] = useState(false)



    useEffect(() => {                                                       //////  ---> Update context.selectedState
        context.setSelectedList(url.listId)                                     //       when refreshin the page
    }, [url])                                                               //////


    useEffect(() => {                                                       //////  ---> Make this listButton desaper
        if (context.listDeleted === props.listId) {                             //       from screen instantly
            setListDeleted(true)                                                //       if this list is deleted
        }                                                                       //
    }, [context.listDeleted])                                               //////


    useEffect(() => {                                                                       //////  ---> Update this listSelected 'true'
        if (context.selectedList === props.listId) {                                            //       or 'false' when clicking a
            setSelectedList(true)                                                               //       ListButton component
        } else {                                                                                //
            setSelectedList(false)                                                              //
        }                                                                                       //
    }, [context.selectedList])                                                              //////


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
        className={'list-button-container ' + (listDeleted ? 'hide ' : '') + (selectedList ? 'selected ' : '') + (listActive ? 'active ' : '') + (listCompleted ? 'completed ' : '')}
        >
        <Link
            to={`/lists/${props.userId}/todos/${props.listId}`}
            className={(selectedList ? 'selected ' : '') + (listActive ? 'active ' : '') + (listCompleted ? 'completed ' : '')}
            onClick={() => context.setSelectedList(props.listId)}
            >{props.listName}
            </Link>
    </div>
}