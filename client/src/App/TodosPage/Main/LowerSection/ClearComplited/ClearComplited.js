import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './clear-complited.scss';

export function ClearComplited() {

    const context = useContext(appContext);

    return <button 
        className={'clear-complited-container ' + (context.allTodos > 0 ? 'active ' + (context.todosComplited > 0 ? 'clicker' : '') : '')}
        onClick={async () => {
            if(context.todosComplited > 0) {
                await fetch('/todos/api/clear-complited', {
                    method: 'DELETE',
                });
                context.setRenderList(true);
            };
        }}
        >
        <p>Clear</p>

    </button>
}