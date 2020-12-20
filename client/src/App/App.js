import React, {useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [user, setUser] = useState({}) // {user}
    let [renderUsers, setRenderUsers] = useState(true) // Boolean
    let [usersArray, setUsersArray] = useState([]) // usersArray from fetch
    let [renderUser, setRenderUser] = useState('') // userId
    let [renderList, setRenderList] = useState('') // Boolean
    let [renderLists, setRenderLists] = useState('') // userId
    let [listsArray, setListsArray] = useState([]) // [{list}, {list}...]
    let [todosArray, setTodosArray] = useState([]) // [{todo}, {todo}...]
    let [renderTodos, setRenderTodos] = useState('') // Boolean
    let [listDeleted, setListDeleted] = useState('') // listId
    let [deleteTodo, setDeleteTodo] = useState('') // todoId
    let [displayState, setDisplayState] = useState({}) // {listId: listId, state: string}
    let [clearCompletedClick, setClearCompletedClick] = useState('') // listId


    let contextValue = {
        user,
        setUser,
        renderUsers,
        setRenderUsers,
        usersArray,
        setUsersArray,
        renderUser,
        setRenderUser,
        renderList,
        setRenderList,
        renderLists,
        setRenderLists,
        listsArray,
        setListsArray,
        todosArray,
        setTodosArray,
        renderTodos,
        setRenderTodos,
        listDeleted,
        setListDeleted,
        deleteTodo,
        setDeleteTodo,
        displayState,
        setDisplayState,
        clearCompletedClick,
        setClearCompletedClick,
    }

    return <appContext.Provider value={contextValue}>
        <BrowserRouter>
            <Switch>
                <Route path='/lists/:userId/todos/:listId'>
                   <TodosPage></TodosPage>
                </Route>
                <Route path='/lists/:userId'>
                   <TodosPage></TodosPage>
                </Route>    
                <Route path='/'>
                    <EnterPage></EnterPage>
                </Route>
            </Switch>   
        </BrowserRouter>
    </appContext.Provider>
}