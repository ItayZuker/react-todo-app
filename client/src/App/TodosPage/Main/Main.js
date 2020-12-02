import React from 'react';
import {List} from './List/List.js';
import {ListsBar} from './ListsBar/ListsBar.js';
import './main.scss';

export function Main(props) {

    return <div className='main-container'>
        <div
            className='left-grid'
            >
            <ListsBar
                allListsArray={props.allListsArray}
                ></ListsBar>
        </div>
        <div
            className='center-grid'
            >
            <div
                className='list-container'
                >
                {props.allListsArray.map(list => {
                    return <List
                        key={list._id}
                        listId={list._id}
                        userId={props.user._id}
                        listName={list.listName}
                        listCompleted={list.completed}
                    >
                    </List>
                })}
            </div>
        </div>
        <div
            className='right-grid'
            >

        </div>
    </div>
}