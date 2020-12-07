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
        if(renderList) {                                                                //       then update listActive state
            async function getUsers() {                                                 //       then trigers render user
                setRenderList(false);                                                   //
                const result = await fetch(`/todos/api/get-todos-list/${listId}`);      //
                const todos = await result.json();                                      //
                setData(todos);                                                         //
            }                                                                           //
            getUsers()                                                                  //
        }                                                                               //
    }, [renderList]);                                                               //////


    useEffect(() => {
        if (data.length > 0) {                                                      //////  ---> Update completed state and
            context.setListActive([listId, true])                                       //       todos number for this list
            if (data.filter(todo => todo.completed === false).length > 0) {             //       then call to render the lists array
                context.setListCompleted([listId, false]);                              //
                fetch(`/lists/api/update-list/${listId}`, {                             //
                    method: 'PUT',                                                      //
                    headers: {                                                          //
                        'Content-Type': 'application/json',                             //
                    },                                                                  //
                    body: JSON.stringify({                                              //
                        completed: false,                                               //
                        todos: data.length,                                             //
                    }),                                                                 //
                })                                                                      //
                .then((res) => {                                                        //
                    console.log(res);                                                   //
                    context.setRenderLists(userId);                                     //
                });                                                                     //
            } else {                                                                    //
                context.setListCompleted([listId, true]);                               //
                fetch(`/lists/api/update-list/${listId}`, {                             //
                    method: 'PUT',                                                      //
                    headers: {                                                          //
                        'Content-Type': 'application/json',                             //
                    },                                                                  //
                    body: JSON.stringify({                                              //
                        completed: true,                                                //
                        todos: data.length,                                             //
                    }),                                                                 //
                })                                                                      //
                .then((res) => {                                                        //
                    console.log(res);                                                   //
                    context.setRenderLists(userId);                                     //
                });                                                                     //
            }                                                                           //
        } else {                                                                        //
            context.setListActive([listId, false])                                      //
            context.setListCompleted([listId, false]);                                  //
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
                context.setRenderLists(userId);                                         //
            });                                                                         //
        }                                                                               //
    }, [data])                                                                      //////

    
    return data
}

