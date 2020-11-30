import React from 'react';
import {List} from './List/List.js';
import './main.scss';

export function Main(props) {

    return <div className='main-container'>
        {props.allListsArray.map(list => {
            return <List
                key={list._id}
                listId={list._id}
                userId={props.userId}
            >
            </List>
        })}
    </div>
}