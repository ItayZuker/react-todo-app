import React, {useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [renderUsers, setRenderUsers] = useState(true); // Boolean
    let [usersArray, setUsersArray] = useState([]);
    let [renderUser, setRenderUser] = useState(''); // userId
    let [renderList, setRenderList] = useState('');
    let [renderLists, setRenderLists] = useState(''); // userId
    let [selectedList, setSelectedList] = useState('')
    let [listCompleted, setListCompleted] = useState([]); // [listId, boolean]
    let [listActive, setListActive] = useState([]) // [listId, boolean]
    let [todoCompleted, setTodoCompleted] = useState([]); // [todoId, boolean, listId]
    let [checkAllCompleted, setCheckAllCompleted] = useState([]); // [listId, boolean]
    let [deleteTodo, setDeleteTodo] = useState('');
    let [saveTodo, setSaveTodo] = useState('');
    let [editActive, setEditActive] = useState('');
    let [displayListState, setDisplayListState] = useState([]); // [listId, string]
    let [clearCompletedClick, setClearCompletedClick] = useState(false);



    let contextValue = {
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
        selectedList,
        setSelectedList,
        listCompleted,
        setListCompleted,
        listActive,
        setListActive,
        todoCompleted,
        setTodoCompleted,
        checkAllCompleted,
        setCheckAllCompleted,
        deleteTodo,
        setDeleteTodo,
        saveTodo,
        setSaveTodo,
        editActive,
        setEditActive,
        displayListState,
        setDisplayListState,
        clearCompletedClick,
        setClearCompletedClick,
    };

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