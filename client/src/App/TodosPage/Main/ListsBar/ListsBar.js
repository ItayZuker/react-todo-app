import React from 'react';
import {ListButton} from './ListButton/ListButton.js';
import {NewList, useState} from './NewList/NewList.js';
import './list-bar.scss';

export function ListsBar(props) {

    return <div
            className='list-bar-container'
            >
            <NewList
                userId={props.userId}
                ></NewList>
            {props.lists.map(list => <ListButton
                key={list._id}
                userId={props.userId}
                listId={list._id}
                listName={list.listName}
                todos={list.todos}
                listCompleted={list.completed}
                ></ListButton>
            )}
    </div>
}