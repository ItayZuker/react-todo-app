import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TodoItem } from './TodoItem/TodoItem.js';
import { appContext } from '../../../../AppContext.js';
import './todo-list.scss';

async function fetchList(userId) {
    const result = await fetch(`/todos/api/${userId}`);
    return result.json();
}

export function TodoList() {

    const context = useContext(appContext);
    let [allTodos, setAllTodos] = useState([]);

    const user = useParams()

    useEffect(() => {
        if(context.renderTodos) {
            async function activate() {
                const allTodosArray = await fetchList(user.userId);
                setAllTodos(allTodosArray);
                context.setTodosArray(allTodosArray);
                context.setRenderTodos(false);
            }
            activate();
        }
    }, [context.renderTodos]);

    return <div className='todo-list-container'>
        { allTodos.map(todo => 
                <TodoItem
                    key={todo._id}
                    userId={todo.userId}
                    todoId={todo._id}
                    body={todo.body}
                    completed={ todo.completed }
                >
                </TodoItem>
            )}
    </div>
}