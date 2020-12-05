import React from 'react';
import {ListButton} from './ListButton/ListButton.js';
import {NewList} from './NewList/NewList.js';
import './list-bar.scss';

export function ListsBar(props) {
    return <div
            className='list-bar-container'
            >
            <NewList
                userId={props.userId}
                ></NewList>
            {props.allListsArray.map(list => <ListButton
                key={list._id}
                userId={props.userId}
                listId={list._id}
                listName={list.listName}
                ></ListButton>
            )}
    </div>
}