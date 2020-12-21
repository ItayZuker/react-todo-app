import React, {useContext, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {appContext} from '../../../../../AppContext';
import './new-list.scss';

export function NewList() {

    const url = useParams()
    const context = useContext(appContext)
    const history = useHistory()
    const [newListNotification, setNewListNotification] = useState('')
    const [renderNotification, setRenderNotification] = useState(false)

    function handleNewListError() {
        setRenderNotification(true)
        setTimeout(() => {
            setRenderNotification(false)
            setNewListNotification('')
        }, 1500)
    }

    return <div
        className='new-list-container'>
        <form
            onSubmit={e => {
                e.preventDefault()
                if (e.target.listName.value === '') {
                    e.target.listName.value = ''
                    setNewListNotification('Add list!')
                    handleNewListError()
                } else if(context.listsArray.find(list => {
                    if(list.listName === e.target.listName.value) return true})) {
                    e.target.listName.value = ''
                    setNewListNotification('Already exist..')
                    handleNewListError()
                } else {
                    context.listsArray.push({listName: e.target.listName.value})
                    fetch(`/lists/api/create-list/${url.userId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            listName: e.target.listName.value,
                        })
                    })
                    .then((res) => res.json())
                    .then((res) => {
                        e.target.listName.value = ''
                        history.push(`/lists/${url.userId}/todos/${res._id}`)
                        context.setRenderLists(true)
                    })
                }
            }}
            >
            <input
                name='listName'
                className={(newListNotification ? 'notification' : '')}
                type='text'
                placeholder={renderNotification ? newListNotification : 'Add list'}
                >
            </input>
            <button
                type='submit'
                className='submit'
                >
                <i className="fas fa-plus"></i>
            </button>    
        </form>
    </div>
}