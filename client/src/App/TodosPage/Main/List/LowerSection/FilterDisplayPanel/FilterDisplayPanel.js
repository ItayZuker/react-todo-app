import React, {useState, useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './filter-display-panel.scss';

export function FilterDisplayPanel(props) {

    const context = useContext(appContext);

    let [selectedButton, setSelectedButton] = useState('all');

    return <div className='filter-display-container'>
        <div
            className={'filter-item ' + (props.todosArray.length > 0 ? 'on ' + (selectedButton === 'all' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState([props.listId, 'all']);
                setSelectedButton('all');  
            }}
        >
        All</div>
        <div
            className={'filter-item ' + (props.todosArray.length > 0 ? 'on ' + (selectedButton === 'active' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState([props.listId, 'active']);
                setSelectedButton('active');
            }}
        >Active
        </div>
        <div
            className={'filter-item ' + (props.todosArray.length > 0 ? 'on ' + (selectedButton === 'completed' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState([props.listId, 'completed']);
                setSelectedButton('completed');
            }}
        >
        Completed</div>
    </div>
}