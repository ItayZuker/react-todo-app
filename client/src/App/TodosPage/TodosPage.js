import React, {useState, useEffect, useContext} from 'react';
import { Header } from './Header/Header.js';
import { Main } from './Main/Main.js';
import { Footer } from './Footer/Footer.js';
import { Dropdown } from './Dropdown/Dropdown.js';
import './todos-page.scss';
import { appContext } from '../../AppContext.js';

export function TodosPage() {

    let context = useContext(appContext);

    let [display, setDisplay] = useState(Boolean);

    useEffect(() => {
        context.allTodos > 0 ? setDisplay(false) : setDisplay(true);
    }, [context.allTodos]);

    return <div className='todo-page-container'>
        <Dropdown></Dropdown>
        <div className='main-header-container'>
            <Header></Header>
            <Main></Main>
        </div>
        <h2
            className={(display ? '' : 'hide')}
        >Nothing<br/>Todo...</h2>
        <Footer></Footer>
    </div>
}