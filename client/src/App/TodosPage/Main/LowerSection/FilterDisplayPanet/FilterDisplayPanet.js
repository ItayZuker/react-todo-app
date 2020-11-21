import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './filter-display-panet.scss';

export function FilterDisplayPanet() {

    let context = useContext(appContext);

    let [selectedButton, setSelectedButton] = useState('all');

    return <div className='filter-display-container'>
        <div 
            className={'filter-item ' + (context.allTodos > 0 ? 'on ' + (selectedButton === 'all' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayTodos('all');
                setSelectedButton('all')
            }}
        >
        All</div>
        <div 
            className={'filter-item ' + (context.allTodos > 0 ? 'on ' + (selectedButton === 'active' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayTodos('active');
                setSelectedButton('active')
            }}
        >Active
        </div>
        <div 
            className={'filter-item ' + (context.allTodos > 0 ? 'on ' + (selectedButton === 'complited' ? 'selected' : '') : '')}
            onClick={() => {
                context.setDisplayTodos('complited');
                setSelectedButton('complited')
            }}
        >
        Complited</div>
    </div>
}