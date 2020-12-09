import React, {useContext, useEffect} from 'react';
import useFetchUser from '../customHooks/useFetchUser.js';
import useFetchLists from '../customHooks/useFetchLists.js';
import useFetchTodos from '../customHooks/useFetchTodos.js';
import {useParams} from 'react-router-dom';
import {Header} from './Header/Header.js';
import {Main} from './Main/Main.js';
import {Footer} from './Footer/Footer.js';
import './todos-page.scss';
import { appContext } from '../../AppContext.js';

export function TodosPage() {

    const url = useParams();
    const context = useContext(appContext)
    const user = useFetchUser(url.userId);
    const lists = useFetchLists(url.userId);
    const todos = useFetchTodos(url.userId)


    useEffect(() => {                                   //////  ---> Update context.listsArray with
        if (lists.length > 0) {                             //       all this users lists, to have
            context.setListsArray(lists)                    //       a list to go to when deleting
        } else {                                            //       other list
            return                                          //
        }                                                   //
    }, [lists])                                         //////


    return <div
        className='todo-page-container'>
        <div
            className='main-header-container'>
            <Header
                user={user}
                todos={todos}
                ></Header>
            <Main
                user={user}
                lists={lists}
                ></Main>
        </div>
            <Footer
                ></Footer>
    </div>
}