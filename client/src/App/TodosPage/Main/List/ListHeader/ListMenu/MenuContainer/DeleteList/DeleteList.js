import React, {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../../../../../../AppContext';
import './delete-list.scss';

export function DeleteList(props) {

    const context = useContext(appContext)
    const history = useHistory();
    const [listIdToGoTo, setListIdToGoTo] = useState('')


    useEffect(() => {                                               //////  ---> Update listIdToGoTo state
        if (context.listsArray.length > 1) {                            //       to define the list to go to
            if (context.listsArray[0]._id === props.listId) {           //       when deleting a list
                setListIdToGoTo(context.listsArray[1]._id)              //
            } else {                                                    //
                setListIdToGoTo(context.listsArray[0]._id)              //
            }                                                           //
        } else {                                                        //
            setListIdToGoTo('')                                         //
        }                                                               //
    }, [context.listsArray])                                        //////


    return <div
        className='delete-list-container'
        onClick={() => {
            context.setListDeleted(props.listId)
            context.setSelectedList(listIdToGoTo)
            history.push(`/lists/${props.userId}/todos/${listIdToGoTo}`)
            fetch(`/todos/api/delete-list/${props.listId}`, {        //////  ---> Delete all this lists todos
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res);                                    //////
            });
            fetch(`/lists/api/delete-list/${props.listId}`, {        //////  ---> Delete this list
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res)                                     //////
                context.setRenderLists(props.userId);
            });
        }}>
        <p>Delete List</p>
        <i className="fas fa-times"></i>
    </div>
}