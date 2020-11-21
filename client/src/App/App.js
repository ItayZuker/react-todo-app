import React, { useEffect, useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [usersArray, setUsersArray] = useState([])
    let [renderUsers, setRenderUsers] = useState(true);
    let [userInput, setUserInput] = useState('');
    let [allUsers, setAllUsers] = useState(null);
    let [renderList, setRenderList] = useState(true);
    let [allTodos, setAllTodos] = useState(null);
    let [todosComplited, setTodosComplited] = useState(null);
    let [displayTodos, setDisplayTodos] = useState('all');

    let contextValue = {
        usersArray,
        setUsersArray,
        renderUsers,
        setRenderUsers,
        userInput,
        setUserInput,
        allUsers,
        setAllUsers,
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
                {usersArray.map(user => <Route path={`/${user.name}/todos`}>
                    <TodosPage
                        userId={user._id}
                        name={user.name}
                    ></TodosPage>
                </Route>    
                )};
                <Route path='/'>
                    <EnterPage></EnterPage>
                </Route>
            </Switch>   
        </BrowserRouter>
    </appContext.Provider>
}