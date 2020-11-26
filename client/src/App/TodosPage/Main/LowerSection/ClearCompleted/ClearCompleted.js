import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../../../../AppContext.js';
import './clear-completed.scss';

export function ClearCompleted() {

    const context = useContext(appContext);

    const allTodos = context.todosArray.length;
    const todosCompleted = (context.todosArray.filter(todo => todo.completed === true).length);

    const user = useParams();

    context.setClearCompletedId(user.userId);

    return <button 
        className={'clear-complited-container ' + (allTodos > 0 ? 'active ' + (todosCompleted > 0 ? 'clicker' : '') : '')}
        onClick={() => {
            context.setClearCompletedClick(true);
        }}
        
        // onClick={async () => {
        //     if(todosCompleted > 0) {
        //         await fetch('/todos/api/clear-completed', {     //
        //             method: 'DELETE',                              // ---> 
        //             heders: {                                   //
        //                 'Content-Type': 'application/json',     //
        //             },                                          //
        //             body: JSON.stringify({                      //
        //                 completed: true,                        //
        //             })                                          //
        //         });                                             //
        //         context.setRenderTodos(true);                   //
        //     };
        // }}
        >
        <p>Clear</p>

    </button>
}