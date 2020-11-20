import React, { useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { WelcomePage } from './WelcomePage/WelcomePage.js';
import './app.scss';

export function App() {

    let [renderList, setRenderList] = useState(true);
    let [allTodos, setAllTodos] = useState(null);
    let [todosComplited, setTodosComplited] = useState(null);
    let [displayTodos, setDisplayTodos] = useState('all');

    let contextValue = {
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
                    <WelcomePage></WelcomePage>
                </Route>
            </Switch>   
        </BrowserRouter>
    </appContext.Provider>
}