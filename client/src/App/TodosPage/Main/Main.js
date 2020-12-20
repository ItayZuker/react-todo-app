import React from 'react';
import {useParams} from 'react-router-dom';
import {List} from './List/List.js';
import {ListsBar} from './ListsBar/ListsBar.js';
import './main.scss';

export function Main() {

    const url = useParams()

    return <div className='main-container'>
        <ListsBar></ListsBar>
        <div
            className={'one-list-container ' + (url.listId ? '' : 'hide')}
            >
            <List></List>
        </div>
    </div>
}