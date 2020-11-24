import React, {useContext} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './clear-completed.scss';

export function ClearCompleted() {

    const context = useContext(appContext);

    return <button 
        className={'clear-complited-container ' + (context.allTodos > 0 ? 'active ' + (context.todosCompleted > 0 ? 'clicker' : '') : '')}
        onClick={async () => {
            if(context.todosCompleted > 0) {
                await fetch('/todos/api/clear-completed', {
                    method: 'DELETE',
                });
                context.setRenderTodos(true);
            };
        }}
        >
        <p>Clear</p>

    </button>
}