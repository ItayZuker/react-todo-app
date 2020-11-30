import React, {useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [renderUsers, setRenderUsers] = useState(true);
    let [usersArray, setUsersArray] = useState([]);
    let [renderUser, setRenderUser] = useState(true);
    let [renderList, setRenderList] = useState('');
    let [listId, setListId] = useState('');
    let [todoId, setTodoId] = useState('');
    let [todoCompleted, setTodoCompleted] = useState('');
    let [allTodosCompleted, setAllTodosCompleted] = useState('');
    let [allTodosNotCompleted, setAllTodosNotCompleted] = useState('');
    let [todoNotCompleted, setTodoNotCompleted] = useState('');
    let [allCompleted, checkAllCompleted] = useState('')
    let [allNotCompleted, checkAllNotCompleted] = useState('')
    let [deleteTodo, setDeleteTodo] = useState('');
    let [saveTodo, setSaveTodo] = useState('');
    let [editActive, setEditActive] = useState('');
    let [displayListState, setDisplayListState] = useState([]);
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
        listId,
        setListId,
        todoId,
        setTodoId,
        todoCompleted,
        setTodoCompleted,
        allTodosCompleted,
        setAllTodosCompleted,
        allTodosNotCompleted,
        setAllTodosNotCompleted,
        todoNotCompleted,
        setTodoNotCompleted,
        allCompleted,
        checkAllCompleted,
        allNotCompleted,
        checkAllNotCompleted,
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