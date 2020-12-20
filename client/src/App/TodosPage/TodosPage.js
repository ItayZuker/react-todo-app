import React from 'react';
import useFetchUser from '../customHooks/useFetchUser.js';
import useFetchLists from '../customHooks/useFetchLists.js';
import useFetchTodos from '../customHooks/useFetchTodos.js';
import {Header} from './Header/Header.js';
import {Main} from './Main/Main.js';
import {Footer} from './Footer/Footer.js';
import './todos-page.scss';

export function TodosPage() {
    
    useFetchUser()
    useFetchLists()
    useFetchTodos()
    
    return <div
        className='todo-page-container'>
        <div
            className='main-header-container'>
            <Header></Header>
            <Main></Main>
        </div>
            <Footer></Footer>
    </div>
}