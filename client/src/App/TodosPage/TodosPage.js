import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Header} from './Header/Header.js';
import {Main} from './Main/Main.js';
import {Footer} from './Footer/Footer.js';
import {appContext} from '../../AppContext.js';
import './todos-page.scss';

export function TodosPage() {

    const context = useContext(appContext);

    const url = useParams();

    const [user, setUser] = useState({});
    const [alltodosArray, setAllTodosArray] = useState([]);
    const [allListsArray, setAllListsArray] = useState([]);
    const [renderUser, setRenderUser] = useState(null);


    useEffect(() => {
        if(context.renderUser === url.userId)
        context.setRenderUser('');
        setRenderUser(true);
    }, [context.renderUser])


    useEffect(() => {                                                           //////  ---> Get the user object
            async function getUser() {                                              //       -
                const result = await fetch(`/users/api/get-user/${url.userId}`);    //       Activeted when component init
                const object = await result.json();                                 //       and when editing user detiles
                setUser(object);                                                    //       at (NOT YET EXIST)
                setRenderUser(false);                                               //       
            };                                                                      //
            getUser();                                                              //                                                                  //
    }, [renderUser]);                                                           //////

        
    useEffect(() => {                                                           //////  ---> Get this users array of lists                                                            //
            async function activet() {                                              //       - 
                const result = await fetch(`/lists/api/get-lists/${url.userId}`);   //       Activeted when this component init 
                const array = await (result.json());                                //       and when user is renderd
                setAllListsArray(array);                                            //       
            }                                                                       //
            activet();                                                              //                                                                          //
    }, [user]);                                                                 //////


    useEffect(() => {                                                           //////  ---> Get this users array of todos
        async function activet() {                                                  //       -
            const result = await fetch(`/todos/api/get-todos/${url.userId}`)        //       Activeted when ever thers a change 
            const usersTodos = await result.json();                                 //       in any list at List, Todo, CheckTodo,
            setAllTodosArray(usersTodos);                                           //       TodoBody, CheckAll and TodoInput components
        };                                                                          //       -
        activet();                                                                  //       The purpes is to send the howl todo array
    }, [context.renderList]);                                                   //////       to the Header component
  

    return <div
        className='todo-page-container'>
        <div
            className='main-header-container'>
            <Header
                user={user}
                allTodosArray={alltodosArray}
                ></Header>
            <Main
                user={user}
                allListsArray={allListsArray}
                ></Main>
        </div>
            <Footer
                ></Footer>
    </div>
}