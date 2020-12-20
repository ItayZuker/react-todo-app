import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {CheckAll} from './CheckAll/CheckAll.js';
import {TodoInput} from './TodoInput/TodoInput.js';
import './input-section.scss';
import { appContext } from '../../../../../AppContext.js';

export function InputSection() {

    const url = useParams()
    const context = useContext(appContext)
    const list = context.listsArray.find(list => list._id === url.listId) || {}

    return <div
        className='upper-section-container'>
        <div
            className='check-all-input-container'
            >
            <CheckAll></CheckAll>
            <TodoInput></TodoInput>
        </div>
        <div className={'h2-container ' + (list.active ? 'hide' : '')}>
            <h2
                >Nothing<br/>Todo...</h2>
        </div>
    </div>
}