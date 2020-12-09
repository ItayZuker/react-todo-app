import React from 'react';
import {ListButton} from './ListButton/ListButton.js';
import {NewList} from './NewList/NewList.js';
import './list-bar.scss';

export function ListsBar(props) {

    return <div
            className='list-bar-container'
            >
            <NewList
                ></NewList>
            {props.lists.map(list => <ListButton
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