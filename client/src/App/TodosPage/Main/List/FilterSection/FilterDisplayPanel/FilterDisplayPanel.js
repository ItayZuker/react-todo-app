import React, {useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './filter-display-panel.scss';

export function FilterDisplayPanel() {

    const url = useParams()
    const context = useContext(appContext);
    const list = context.listsArray.find(list => list._id === url.listId) || {}


    let [display, setDisplay] = useState('all')

    return <div className='filter-display-container'>
        <div
            className={'filter-item ' + (list.active ? 'on ' + (display === 'all' ? 'selected' : '') : '')}
            onClick={() => {
                if (list.active) {
                    context.setDisplayState({listId: url.listId, state: 'all'})
                    setDisplay('all')
                }
            }}
        >
        All</div>
        <div
            className={'filter-item ' + (list.active ? 'on ' + (display === 'active' ? 'selected' : '') : '')}
            onClick={() => {
                if (list.active) {
                    context.setDisplayState({listId: url.listId, state: 'active'})
                    setDisplay('active')
                }
            }}
        >Active
        </div>
        <div
            className={'filter-item ' + (list.active ? 'on ' + (display === 'completed' ? 'selected' : '') : '')}
            onClick={() => {
                if (list.active) {
                    context.setDisplayState({listId: url.listId, state: 'completed'})
                    setDisplay('completed')
                }
            }}
        >
        Completed</div>
    </div>
}