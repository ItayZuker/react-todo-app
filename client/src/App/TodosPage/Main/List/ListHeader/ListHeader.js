import React, {useContext, useState, useEffect, useRef} from 'react';
import {ListMenu} from './ListMenu/ListMenu.js';
import { appContext } from '../../../../../AppContext';
import './list-header.scss';

export function ListHeader(props) {

    const context = useContext(appContext)
    const [listCompleted, setListCompleted] = useState(props.listCompleted);
    const [active, setActive] = useState(false);
    const [listName, setListName] = useState(props.listName)
    const [editActive, setEditActive] = useState(false);
    const thisListName = useRef();

    // console.log(props.listName)

    useEffect(() => {                                                           //////  ---> update listName with
        setListName(props.listName)                                                 //       data from fetch
    }, [props.listName])                                                        //////

    useEffect(() => {                                                           //////  ---> Set focus on thisListName
        if(editActive) {                                                            //       after it become editActive
            thisListName.current.focus();                                           //
        }                                                                           //
    }, [editActive]);                                                           //////

    document.addEventListener('click', resetTitle);                             //////  ---> Reset this todo's body
    function resetTitle(e) {                                                        //       if click outside befour submit
        if(thisListName.current !== null) {                                         //       
            if(e.target.id !== ('list-name-' + props.listId)) {                     //
                thisListName.current.innerText = props.listName;                    //
                setEditActive(false);                                               //
            };                                                                      //
        };                                                                          //
    };                                                                          //////

    document.addEventListener('keypress', pressEnter);                          ////// ---> Submit the listName change
    function pressEnter(e) {                                                        //      for this list when press Enter
        if(thisListName.current !== null) {                                         //       
            if(e.charCode === 13) {                                                 //
                if(editActive) {                                                    //
                    setEditActive(false);                                           //
                    if(thisListName.current.innerText === '') {                     //
                        setListName(listName);  // <---                             //
                    } else {                                                        //
                        saveUpdate();                                               //
                    };                                                              //
                };                                                                  //
            };                                                                      //
        };                                                                          //
    };                                                                          //////

    function saveUpdate() {                                                     //////  ---> function to save this list update
        context.setListName([props.listId, thisListName.current.innerText])         //
        fetch(`/lists/api/update-list-name/${props.listId}`, {                      //
            method: 'PUT',                                                          //
            headers: {                                                              //
                'Content-Type': 'application/json',                                 //
            },                                                                      //
            body: JSON.stringify({                                                  //
                listName: thisListName.current.innerText,                           //
            })                                                                      //
        })                                                                          //
        .then(() => {                                                               //
            context.setRenderLists(props.userId);                                   //
        });                                                                         //
    };                                                                          //////


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
            ref={thisListName}
            onDoubleClick={() => {
                setEditActive(true);
            }}
            contentEditable={editActive ? 'true' : 'false'}
            >{listName}
            </h2>
        <ListMenu
            userId={props.userId}
            listId={props.listId}
            ></ListMenu>
    </div>
}