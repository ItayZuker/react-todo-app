import React, {useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [usersArray, setUsersArray] = useState([])
    let [renderUsers, setRenderUsers] = useState(true);
    let [userInput, setUserInput] = useState('');
    let [renderTodos, setRenderTodos] = useState(true);
    let [todosArray, setTodosArray] = useState([]);
    let [displayTodos, setDisplayTodos] = useState('all');
    let [clearCompletedClick, setClearCompletedClick] = useState(false);
    let [clearCompletedId, setClearCompletedId] = useState('');

    let contextValue = {
        usersArray,
        setUsersArray,
        renderUsers,
        setRenderUsers,
        userInput,
        setUserInput,
        renderTodos,
        setRenderTodos,
        todosArray,
        setTodosArray,
        displayTodos,
        setDisplayTodos,
        clearCompletedClick,
        setClearCompletedClick,
        clearCompletedId,
        setClearCompletedId,
    }

    return <appContext.Provider value={contextValue}>
        <BrowserRouter>
            <Switch>
                <Route path='/todos/:userId'>
                   <TodosPage></TodosPage>
                </Route>    
                <Route path='/'>
                    <EnterPage></EnterPage>
                </Route>
            </Switch>   
        </BrowserRouter>
    </appContext.Provider>
}