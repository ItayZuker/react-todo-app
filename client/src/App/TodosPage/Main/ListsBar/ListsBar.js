import React, {useContext} from 'react';
import {ListButton} from './ListButton/ListButton.js';
import {NewList} from './NewList/NewList.js';
import './list-bar.scss';
import { appContext } from '../../../../AppContext.js';

export function ListsBar() {

    const context = useContext(appContext)

    return <div
            className='list-bar-container'
            >
            <NewList
                ></NewList>
            {context.listsArray.map(list => <ListButton
                key={list._id}
                userId={list.userId}
                listId={list._id}
                listName={list.listName}
                todos={list.todos}
                listCompleted={list.completed}
                ></ListButton>
            )}
    </div>
}