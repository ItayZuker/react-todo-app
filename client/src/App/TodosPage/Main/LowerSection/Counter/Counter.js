import React, {useContext} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './counter.scss';



export function Counter() {

    const context = useContext(appContext);

    const itemsLeft = context.allTodos-context.todosComplited;

    return <div
        className='counter-container'>
        <p
            className={context.allTodos > 0 ? 'active' : ''}
            ><span
                className={context.allTodos > 0 ? itemsLeft > 0 ? 'red' : 'green' : ''}
            >
            {itemsLeft}</span> items left
        </p>
    </div>
}