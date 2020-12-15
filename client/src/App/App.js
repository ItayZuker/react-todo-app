import React, {useState } from 'react';
import { TodosPage } from './TodosPage/TodosPage.js';
import { appContext } from '../AppContext.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { EnterPage } from './EnterPage/EnterPage.js';
import './app.scss';

export function App() {

    let [renderUsers, setRenderUsers] = useState(true); // Boolean
    let [usersArray, setUsersArray] = useState([]); // usersArray from fetch
    let [renderUser, setRenderUser] = useState(''); // userId
    let [renderList, setRenderList] = useState(''); // listId
    let [renderLists, setRenderLists] = useState(''); // userId
    let [selectedList, setSelectedList] = useState('')  // listId
    let [listsArray, setListsArray] = useState([]) // [listId, listId...]
    let [listCompleted, setListCompleted] = useState({}); // {listId: listId, completed: Boolean}
    let [listActive, setListActive] = useState({}) // {listId: listId, active: Boolean}
    let [listDeleted, setListDeleted] = useState('') // listId
    let [listName, setListName] = useState({}) // {listId: listId, listNam: string}
    let [todoCompleted, setTodoCompleted] = useState({}); // {listId: listId, todoId: todoId, completed: Boolean}
    let [checkAllCompleted, setCheckAllCompleted] = useState({}); // {listId: listId, completed: Boolean}
    let [deleteTodo, setDeleteTodo] = useState(''); // todoId
    let [displayListState, setDisplayListState] = useState({}); // {listId: listId, state: string}
    let [clearCompletedClick, setClearCompletedClick] = useState(''); // listId


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
        listsArray,
        setListsArray,
        listCompleted,
        setListCompleted,
        listActive,
        setListActive,
        listDeleted,
        setListDeleted,
        listName,
        setListName,
        todoCompleted,
        setTodoCompleted,
        checkAllCompleted,
        setCheckAllCompleted,
        deleteTodo,
        setDeleteTodo,
        displayListState,
        setDisplayListState,
        clearCompletedClick,
        setClearCompletedClick,
    };

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