import React, { useState, useEffect, useContext } from 'react';
import { TodoItem } from './TodoItem/TodoItem.js';
import { appContext } from '../../../../AppContext.js';
import './todo-list.scss';

async function fetchList() {
    const result = await fetch('/todos/api');
    return result.json();
}

export function TodoList(props) {

    const context = useContext(appContext);

    let [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        if(context.renderList) {
            async function activate() {
                const allTodosArray = await fetchList();
                setAllTodos(allTodosArray);
                context.setAllTodos(allTodosArray.length);
                context.setTodosComplited(allTodosArray.filter(todo => todo.complited === true).length);
                context.setRenderList(false);
            }
            activate();
        }
    }, [context.renderList]);

    return <div className='todo-list-container'>
        { allTodos.map(todo => 
                <TodoItem key={todo._id}
                    todoId={ todo._id }
                    body={ todo.body }
                    complited={ todo.complited }
                >
                </TodoItem>
            )}
    </div>
}