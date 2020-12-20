import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { appContext } from '../../../../../../../../AppContext';
import './delete-list.scss';

export function DeleteList() {

    const url = useParams()
    const context = useContext(appContext)
    const history = useHistory();
    const [listIdToGoTo, setListIdToGoTo] = useState('')


    useEffect(() => {
        if (context.listsArray.length > 1) {
            if (context.listsArray[0]._id === url.listId) {
                setListIdToGoTo(context.listsArray[1]._id)
            } else {
                setListIdToGoTo(context.listsArray[0]._id)
            }               
        } else {
            setListIdToGoTo('')
        }
    }, [context.listsArray])


    return <div
        className='delete-list-container'
        onClick={() => {
            context.setListDeleted(url.listId)
            history.push(`/lists/${url.userId}/todos/${listIdToGoTo}`)
            fetch(`/todos/api/delete-list/${url.listId}`, {
                method: 'DELETE'
            })
            fetch(`/lists/api/delete-list/${url.listId}`, {
                method: 'DELETE'
            })
            .then(() => {
                context.setRenderLists(true);
            })
        }}>
        <p>Delete List</p>
        <i className="fas fa-times"></i>
    </div>
}