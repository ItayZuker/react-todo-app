import React, { useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [renderUsers, setRenderUsers] = useState(true);
    let [userInput, setUserInput] = useState('');
    let [renderList, setRenderList] = useState(true);
    let [allTodos, setAllTodos] = useState(null);
    let [todosComplited, setTodosComplited] = useState(null);
    let [displayTodos, setDisplayTodos] = useState('all');

    let contextValue = {
        renderUsers,
        setRenderUsers,
        userInput,
        setUserInput,
        renderList,
        setRenderList,
        allTodos,
        setAllTodos,
        todosComplited,
        setTodosComplited,
        displayTodos,
        setDisplayTodos,
    }

    return <appContext.Provider value={contextValue}>
        <BrowserRouter>
            <Switch>
                <Route path='/todos-page'>
                    <TodosPage></TodosPage>
                </Route>
                <Route path='/'>
                    <EnterPage></EnterPage>
                </Route>
            </Switch>   
        </BrowserRouter>
    </appContext.Provider>
}