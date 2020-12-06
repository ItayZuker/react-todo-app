import React, {useContext} from 'react';
import { appContext } from '../../../../../../../AppContext.js';
import './delete-button.scss';

export function DeleteButton(props) {

    const context = useContext(appContext);

    return <div
        className='delete-button-container'
        >
        <button
            className='delete-button'
            onClick={() => {
                context.setDeleteTodo(props.todoId);
            }}
        >
        <i className="fas fa-times"></i>
        </button>
    </div>
}