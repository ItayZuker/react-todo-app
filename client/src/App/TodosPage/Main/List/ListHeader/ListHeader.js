import React, {useContext, useState, useEffect, useRef} from 'react';
import {ListMenu} from './ListMenu/ListMenu.js';
import { appContext } from '../../../../../AppContext';
import './list-header.scss';

export function ListHeader(props) {

    const context = useContext(appContext)
    let [listCompleted, setListCompleted] = useState(props.listCompleted);
    let [active, setActive] = useState(null);
    const [editActive, setEditActive] = useState(false);
    const thisTitle = useRef();


    useEffect(() => {                                                   //////  ---> Set focus on thisTitle
        if(editActive) {                                                    //       after it become editActive
            thisTitle.current.focus();                                      //
        }                                                                   //
    }, [editActive]);                                                   //////

    document.addEventListener('click', resetTitle);              
                                                                
    function resetTitle(e) {                                            //////  ---> Reset this todo's body
        if(thisTitle.current !== null) {                                    //       if click outside befour submit
            if(context.editActive === props.listId) {                       //
                context.setEditActive('');                                  //
                if(e.target.id !== ('list-name-' + props.listId)) {         //
                    thisTitle.current.innerText = props.listName;           //
                    setEditActive(false);                                   //
                };                                                          //
            };                                                              //
        };                                                                  //
    };                                                                  //////

    document.addEventListener('keypress', pressEnter);          
                                                                    
    function pressEnter(e) {                                            ////// ---> Submit the listName change
        if(thisTitle.current !== null) {                                    //       for this list when press Enter
            if(e.charCode === 13) {                                         //
                if(editActive) {                                            //
                    setEditActive(false);                                   //
                    if(thisTitle.current.innerText === '') {                //
                        thisTitle.current.innerText = props.listName;       //
                    } else {                                                //
                        saveUpdate();                                       //
                    };                                                      //
                };                                                          //
            };                                                              //
        };                                                                  //
    };                                                                  //////

    function saveUpdate() {                                             //////  ---> function to save this list update
        fetch(`/lists/api/update-list-name/${props.listId}`, {              //
            method: 'PUT',                                                  //
            headers: {                                                      //
                'Content-Type': 'application/json',                         //
            },                                                              //
            body: JSON.stringify({                                          //
                listName: thisTitle.current.innerText,                      //
            })                                                              //
        })                                                                  //
        .then(() => {                                                       //
            context.setRenderLists(props.userId);                           //
        });                                                                 //
    };                                                                  //////


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
            suppressContentEditableWarning={true}
            id={'list-name-' + props.listId}
            ref={thisTitle}
            onDoubleClick={() => {
                context.setEditActive(props.listId);
                setEditActive(true);
            }}
            contentEditable={editActive ? 'true' : 'false'}
            >{props.listName}
            </h2>
        <ListMenu
            userId={props.userId}
            listId={props.listId}
            ></ListMenu>
    </div>
}