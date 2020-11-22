import React, { useState, useEffect, useContext } from 'react';
import { TodoItem } from './TodoItem/TodoItem.js';
import { appContext } from '../../../../AppContext.js';
import './todo-list.scss';

async function fetchList(userId) {
    const result = await fetch(`/todos/api/${userId}`);
    return result.json();
}

export function TodoList(props) {

    const context = useContext(appContext);
    let [allTodos, setAllTodos] = useState([]);

    useEffect(() => {
        if(context.renderTodos) {
            async function activate() {
                const allTodosArray = await fetchList(props.userId);
                setAllTodos(allTodosArray);
                context.setAllTodos(allTodosArray.length);
                context.setTodosCompleted(allTodosArray.filter(todo => todo.completed === true).length);
                context.setRenderTodos(false);
            }
            activate();
        }
    }, [context.renderTodos]);

    return <div className='todo-list-container'>
        { allTodos.map(todo => 
                <TodoItem key={todo._id}
                    todoId={ todo._id }
                    body={ todo.body }
                    completed={ todo.completed }
                >
                </TodoItem>
            )}
    </div>
}