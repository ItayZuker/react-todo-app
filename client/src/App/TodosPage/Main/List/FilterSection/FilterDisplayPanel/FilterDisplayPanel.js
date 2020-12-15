import React, {useState, useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './filter-display-panel.scss';

export function FilterDisplayPanel(props) {

    const context = useContext(appContext);

    let [selectedButton, setSelectedButton] = useState('all');

    return <div className='filter-display-container'>
        <div
            className={'filter-item ' + (props.active ? 'on ' + (selectedButton === 'all' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState({listId: props.listId, state: 'all'});
                setSelectedButton('all');  
            }}
        >
        All</div>
        <div
            className={'filter-item ' + (props.active ? 'on ' + (selectedButton === 'active' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState({listId: props.listId, state: 'active'});
                setSelectedButton('active');
            }}
        >Active
        </div>
        <div
            className={'filter-item ' + (props.active ? 'on ' + (selectedButton === 'completed' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayListState({listId: props.listId, state: 'completed'});
                setSelectedButton('completed');
            }}
        >
        Completed</div>
    </div>
}