import React, {useContext} from 'react';
import { appContext } from '../../../../../../AppContext';
import './clear-completed.scss';

export function ClearCompleted(props) {

    const context = useContext(appContext);

    const allTodosInList = props.list.length;
    const completedTodos = props.list.filter(todo => todo.completed === true).length;

    return <button 
        className={'clear-complited-container ' + (allTodosInList > 0 ? 'active ' + (completedTodos > 0 ? 'clicker' : '') : '')}
        onClick={() => context.setClearCompletedClick(props.listId)}                                                                      //         //       completed todos in this list
        >
        <p>Clear</p>

    </button>
}