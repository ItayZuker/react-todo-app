import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './counter.scss';

export function Counter() {

    const url = useParams()
    const context = useContext(appContext)
    const list = context.listsArray.find(list => list._id === url.listId) || {}
    
    return <div
        className='counter-container'>
        <p
            className={list.active ? 'active' : ''}
            ><span
                className={list.active ? list.todos - list.completed > 0 ? 'red' : 'green' : ''}
            >
            {list.todos - list.completed || 0}</span> left
        </p>
    </div>
}