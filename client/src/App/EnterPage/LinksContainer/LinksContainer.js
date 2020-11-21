import React, {useState, useEffect, useContext} from 'react';
import { User } from './User/User.js';
import './links-container.scss';
import { appContext } from '../../../AppContext.js';

async function fetchUsers() {
    const result = await fetch('/users/api');
    return result.json(); 
}

export function LinksContainer() {

    const context = useContext(appContext);

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        async function activate() {
            const usersArray = await fetchUsers();
            setUsersList(usersArray);
        }
        activate();
        context.setRenderUsers(false);
    }, [context.renderUsers]);

    return <div className='links-container'>
        {usersList.map(user => <User
                name={user.name}>
            </User>
        )}
        <button
            onClick={() => {
                context.userInput === 'active' ? context.setUserInput('') : context.setUserInput('active');
            }}>+</button>
    </div>
}


{/* <Link to="/todos-page">Itay</Link> */}