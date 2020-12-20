import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './clear-completed.scss';

export function ClearCompleted() {

    const url = useParams()
    const context = useContext(appContext)
    const list = context.listsArray.find(list => list._id === url.listId) || {}

    return <button 
        className={'clear-complited-container ' + (list.active ? 'active ' + (list.completed > 0 ? 'clicker' : '') : '')}
        onClick={() => context.setClearCompletedClick(list._id)}
        >
        <p>Clear</p>

    </button>
}