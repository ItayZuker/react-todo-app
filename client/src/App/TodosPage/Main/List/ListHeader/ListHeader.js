import React, {useContext, useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom'
import {ListMenu} from './ListMenu/ListMenu.js';
import {appContext} from '../../../../../AppContext';
import './list-header.scss';

export function ListHeader() {

    const url = useParams()
    const context = useContext(appContext)
    const list = context.listsArray.find(list => list._id === url.listId) || {}
    const [editActive, setEditActive] = useState(false)
    const [titleNotification, setTitleNotification] = useState('')
    const [renderNotification, setRenderNotification] = useState(false)
    const thisListName = useRef()

    useEffect(() => {
        if(editActive) thisListName.current.focus()
    }, [editActive])

    function saveUpdate(e) {
        fetch(`/lists/api/update-list-name/${list._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                listName: e.target.innerText,
            })
        })
        .then(() => {
            context.setRenderLists(true)
        })
    }

    function handleError() {
        setRenderNotification(true)
        setTimeout(() => {
            setRenderNotification(false)
            setTitleNotification('')
        }, 1500)
    }

    return <div
        className='list-header-container'>
        <h2
            id={list._id}
            ref={thisListName}
            className={(list.active ? 'active ' + (list.allCompleted ? 'completed ' : '') : '') + (renderNotification ? 'notification' : '')}
            suppressContentEditableWarning={true}
            onDoubleClick={(e) => {
                setEditActive(true)
            }}
            onBlur={(e) => {
                e.target.innerText = list.listName
                setEditActive(false)
            }}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setEditActive(false)
                    if(e.target.innerText === '') {
                        e.target.innerText = list.listName;
                    } else if (context.listsArray.find(list => list.listName === e.target.innerText)) {
                        setTitleNotification("Already exist..")
                        handleError()
                    } else {
                        context.listsArray.forEach(list => {
                            if (list._id === url.listId) list.listName = e.target.innerText
                        })
                        saveUpdate(e)
                    }
                }
            }}
            contentEditable={editActive ? 'true' : 'false'}
            >{renderNotification ? titleNotification : list.listName}
            </h2>
        <ListMenu></ListMenu>
    </div>
}