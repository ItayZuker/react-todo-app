import {useState, useEffect, useContext} from 'react';
import { appContext } from '../../AppContext';

export default function useFetchTodos(userId) {

    const context = useContext(appContext)
    const [data, setData] = useState([])
    const [renderTodos, setRenderTodos] = useState(true)

    useEffect(() => {
        if (context.renderUser === userId) {
            setRenderTodos(true)
        }
    }, [context.renderUser])

    useEffect(() => {
        if (renderTodos) {
            async function getUsers() {                                                 //       is updated every time ther is
                const result = await fetch(`/todos/api/get-user-todos/${userId}`);      //       a call to render this user
                const todos = await result.json();
                setRenderTodos(false)                                      //
                setData(todos)                                                          //
            }                                                                           //
            getUsers()
        }                                                               //////  ---> All todos array for this user                                                                  //
    }, [renderTodos]);                                                       //////

    return data
}

