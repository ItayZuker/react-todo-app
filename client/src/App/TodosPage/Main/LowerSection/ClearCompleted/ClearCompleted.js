import React, {useContext} from 'react';
import { appContext } from '../../../../../AppContext.js';
import './clear-completed.scss';

export function ClearCompleted() {

    const context = useContext(appContext);

    const allTodos = context.todosArray.length;
    const todosCompleted = (context.todosArray.filter(todo => todo.completed === true).length);

    return <button 
        className={'clear-complited-container ' + (allTodos > 0 ? 'active ' + (todosCompleted > 0 ? 'clicker' : '') : '')}
        onClick={async () => {
            if(todosCompleted > 0) {
                await fetch('/todos/api/clear-completed', {     //
                    method: 'PUT',                              // ---> This fetch updates deleted key: true
                    heders: {                                   //      for all this users todos
                        'Content-Type': 'application/json',     //      -
                    },                                          //      The delete fetch is activeted
                    body: JSON.stringify({                      //      at the todoItem component
                        completed: true,                        //
                    })                                          //
                });                                             //
                context.setRenderTodos(true);                   //
            };
        }}
        >
        <p>Clear</p>

    </button>
}