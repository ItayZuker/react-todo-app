import React, {useEffect, useContext} from 'react';
import { User } from './User/User.js';
import './users-container.scss';
import { appContext } from '../../../AppContext.js';

async function fetchUsers() {
    const result = await fetch('/users/api');
    return result.json(); 
}

export function UsersContainer() {

    const context = useContext(appContext);

    useEffect(() => {
        async function activate() {
            const usersArray = await fetchUsers();
            context.setUsersArray(usersArray)
            context.setAllUsers(usersArray.length);
        }
        activate();
        context.setRenderUsers(false);
    }, [context.renderUsers]);

    return <div className='users-container'>
        {context.usersArray.map(user => <User
                key={user._id}
                name={user.name}>
            </User>
        )}
    </div>
}