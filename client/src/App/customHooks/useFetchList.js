import {useState, useEffect, useContext} from 'react';
import { appContext } from '../../AppContext';

export default function useFetchLists(userId, listId) {

    const context = useContext(appContext)
    const [data, setData] = useState([])
    const [renderList, setRenderList] = useState(true)

    useEffect(() => {                                                               //////  ---> Triger the fetch
        if(context.renderList === listId) {                                             //
            context.setRenderList('');                                                  //
            setRenderList(true)                                                         //
        }                                                                               //
    }, [context.renderList])                                                        //////
    

    useEffect(() => {                                                               //////  ---> Fetch all todos of this list    
        if(renderList) {                                                                //       and then trigers render user
            async function getUsers() {                                                 //
                setRenderList(false);                                                   //
                const result = await fetch(`/todos/api/get-todos-list/${listId}`);      //
                const todos = await result.json();                                      //
                context.setRenderLists(userId);                                            //
                setData(todos);                                                         //
            }                                                                           //
            getUsers()                                                                  //
        }                                                                               //
    }, [renderList]);                                                               //////


    useEffect(() => {                                                               //////  ---> Update completed state and 
        if(data.filter(todo => todo.completed === false).length > 0) {                  //       number of todos for this list 
            context.setListCompleted([listId, false]);                                  //       at every render
            fetch(`/lists/api/update-list/${listId}`, {                                 //
                method: 'PUT',                                                          //
                headers: {                                                              //
                    'Content-Type': 'application/json',                                 //
                },                                                                      //
                body: JSON.stringify({                                                  //
                    completed: false,                                                   //
                    todos: data.length,                                                 //
                }),                                                                     //
            })                                                                          //
            .then((res) => {                                                            //
                console.log(res);                                                       //
            });                                                                         //
        } else {                                                                        //
            context.setListCompleted([listId, true]);                                   //
            fetch(`/lists/api/update-list/${listId}`, {                                 //
                method: 'PUT',                                                          //
                headers: {                                                              //
                    'Content-Type': 'application/json',                                 //
                },                                                                      //
                body: JSON.stringify({                                                  //
                    completed: true,                                                    //
                    todos: data.length,                                                 //
                }),                                                                     //
            })                                                                          //
            .then((res) => {                                                            //
                console.log(res);                                                       //
            });                                                                         //
        }                                                                               //
    }, [data])                                                                      //////

    
    return data
}

