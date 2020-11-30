import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Header} from './Header/Header.js';
import {Main} from './Main/Main.js';
import {Footer} from './Footer/Footer.js';
import {Dropdown} from './Dropdown/Dropdown.js';
import {appContext} from '../../AppContext.js';
import './todos-page.scss';

export function TodosPage() {

    const context = useContext(appContext);

    const url = useParams();

    let [user, setUser] = useState({});
    let [allListsArray, setAllListsArray] = useState([]);


    useEffect(() => {                                                           //////  ---> Get the user object
        async function getUser() {                                                  //       -
            const result = await fetch(`/users/api/get-user/${url.userId}`);        //       Activeted when component init
            const object = await result.json();                                     //       and when editing user detiles
            setUser(object);                                                        //       at (NOT YET EXIST)
            context.setRenderUser(false);                                           //       
        };                                                                          //
        getUser();                                                                  //
    }, [context.renderUser]);                                                   //////

        
    useEffect(() => {                                                           //////  ---> Get this users array of lists
            async function activate() {                                             //       - 
                const result = await fetch(`/lists/api/get-lists/${url.userId}`);   //       activeted when component init 
                const array = await (result.json());                                //       and when new list is created
                setAllListsArray(array);                                          //       at (NOT YET EXIST) 
                context.setRenderUser(false);                                       //       
            }                                                                       //
            activate();                                                             //
    }, [context.renderUser]);                                                   //////


    return <div
        className='todo-page-container'>
        <Dropdown
            user={user}
            ></Dropdown>
        <div
            className='main-header-container'>
            <Header
                user={user}
                ></Header>
            <Main
                userId={url.userId}
                allListsArray={allListsArray}
                ></Main>
        </div>
        <Footer
            ></Footer>
    </div>
}