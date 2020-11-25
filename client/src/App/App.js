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
    let [allUsers, setAllUsers] = useState(null);
    let [renderTodos, setRenderTodos] = useState(true);
    let [allTodos, setAllTodos] = useState(null);
    let [todosCompleted, setTodosCompleted] = useState(null);
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
        renderTodos,
        setRenderTodos,
        allTodos,
        setAllTodos,
        todosCompleted,
        setTodosCompleted,
        displayTodos,
        setDisplayTodos,
    }

    return <appContext.Provider value={contextValue}>
        <BrowserRouter>
            <Switch>
                {usersArray.map(user => <Route
                    key={user._id}
                    path={`/${user.name}/todos`}>
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