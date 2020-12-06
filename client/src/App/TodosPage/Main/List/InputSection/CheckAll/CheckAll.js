import React, {useState, useEffect, useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './check-all.scss';

export function CheckAll(props) {

    const context = useContext(appContext);

    let [buttonActive, setButtonActive] = useState(false);
    let [listCompleted, setlistCompleted] = useState(props.listCompleted);


    useEffect(() => {                                                                               //////  ---> Update activeButton state    
        props.list.length > 0 ? setButtonActive(true) : setButtonActive(false);                         //       after list render
    }, [props.list])                                                                                //////


    useEffect(() => {                                                                               //////  ---> Update listCompleted state
        setlistCompleted(props.listCompleted)                                                           //       after list render to reconfirm
    }, [props.listCompleted])                                                                       //////       or chenge back if the fetch hed problem


    useEffect(() => {                                                                               //////  ---> Update listCompleted instantly false
        if (context.listCompleted[0] === props.listId) {                                                //       when any CheckTodo update false
            context.listCompleted[1] ? setlistCompleted(true) : setlistCompleted(false);                //
        }                                                                                               //    
    }, [context.listCompleted])                                                                     //////


    return <button
        className={'all-green-button ' + (buttonActive ? listCompleted ? 'true' : 'false' : 'not-active')}
        onClick={() => {
            if(listCompleted) {                                                                     //////  ---> When clicked, the activeButton state
                setlistCompleted(false)                                                                 //       and listCompleted state are updated instantly
                context.setCheckAllCompleted([props.listId, false]);                                    //       -
                fetch(`/todos/api/all-todos-completed-false/${props.listId}`, {                         //       then call to render this list
                    method: 'PUT',                                                                      //       -
                })                                                                                      //       then activeButton state and listCompleted state
                .then((res) => {                                                                        //       reconfirm or chenge back if the fetch hed problem
                    console.log(res);                                                                   //
                    context.setRenderList(props.listId)                                                 //
                });                                                                                     //
            } else {                                                                                    //
                setlistCompleted(true)                                                                  //
                context.setCheckAllCompleted([props.listId, true]);                                     //
                fetch(`/todos/api/all-todos-completed-true/${props.listId}`, {                          //
                    method: 'PUT',                                                                      //
                })                                                                                      //
                .then((res) => {                                                                        //
                    console.log(res);                                                                   //
                    context.setRenderList(props.listId)                                                 //
                });                                                                                     //
            };                                                                                          //
        }}                                                                                          //////
        >
        {props.list.length > 0  ? listCompleted ? <i className="fas fa-times"></i> : <i className="fas fa-check"></i> : <i className="fas fa-times"></i>}
    </button>
}