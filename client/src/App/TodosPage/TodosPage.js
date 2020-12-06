import React from 'react';
import useFetchUser from '../customHooks/useFetchUser.js';
import useFetchLists from '../customHooks/useFetchLists.js';
import useFetchTodos from '../customHooks/useFetchTodos.js';
import {useParams} from 'react-router-dom';
import {Header} from './Header/Header.js';
import {Main} from './Main/Main.js';
import {Footer} from './Footer/Footer.js';
import './todos-page.scss';

export function TodosPage() {

    const url = useParams();
    const user = useFetchUser(url.userId);
    const lists = useFetchLists(url.userId);
    const todos = useFetchTodos(url.userId)

    return <div
        className='todo-page-container'>
        <div
            className='main-header-container'>
            <Header
                user={user}
                todos={todos}
                ></Header>
            <Main
                user={user}
                lists={lists}
                ></Main>
        </div>
            <Footer
                ></Footer>
    </div>
}