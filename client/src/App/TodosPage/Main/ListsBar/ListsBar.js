import React from 'react';
import {ListButton} from './ListButton/ListButton.js';
import './list-bar.scss';

export function ListsBar(props) {
    return <div
            className='list-bar-container'
            >
            {props.allListsArray.map(list => <ListButton
                key={list._id}
                listId={list._id}
                listName={list.listName}
                ></ListButton>
            )}
    </div>
}