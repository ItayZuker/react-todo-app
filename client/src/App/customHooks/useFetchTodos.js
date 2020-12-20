import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../AppContext';

export default function useFetchTodos() {
    
    const url = useParams()
    const context = useContext(appContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        context.setRenderTodos(false)    
        async function getUsers() {
            const result = await fetch(`/todos/api/get-user-todos/${url.userId}`)
            const todos = await result.json()
            context.setTodosArray(todos)
            updateList(todos)
            setData(todos)
        }
        getUsers()
    }, [context.renderTodos])

    function allCompleted(todos) {
        const listTodos = todos.filter(todo => todo.listId === url.listId)
        if (listTodos.length > 0) {
            if (listTodos.filter(todo => todo.completed === false).length > 0) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }

    function completed(todos) {
        const listTodos = todos.filter(todo => todo.listId === url.listId)
        return listTodos.filter(todo => todo.completed === true).length
    }

    function todosNum(todos) {
        return todos.filter(todo => todo.listId === url.listId).length;
    }

    function active(todos) {
        if (todos.filter(todo => todo.listId === url.listId).length > 0) {
            return true
        } else {
            return false
        }
    }

    function updateList(todos) {
        fetch(`/lists/api/update-list/${url.listId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        todos: todosNum(todos),
                        completed: completed(todos),
                        allCompleted: allCompleted(todos),
                        active: active(todos),
                    }),
                })
                .then(() => {
                    context.setRenderLists(true)
                })
    }
    return data
}