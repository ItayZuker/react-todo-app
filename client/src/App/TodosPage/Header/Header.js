import React, {useState, useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './header.scss';
import { appContext } from '../../../AppContext';

async function getUser(userId) {
    const result = await fetch(`/users/api/${userId}`);
    return result.json();
}

export function Header() {

    const context = useContext(appContext);

    const [userName, setUserName] = useState('');

    const user = useParams();

    useEffect(() => {
        async function renderUser() {
            const userObject = await getUser(user.userId);
            setUserName(userObject.name);
        }
        renderUser();
    }, []);

    return <div className='header-container'>
        <h1
            className={'user-title ' + (context.allTodos > 0 ? 'red' : '')}
        >{userName} todos</h1>
    </div>
}