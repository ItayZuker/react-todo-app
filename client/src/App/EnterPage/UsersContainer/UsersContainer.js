import React, {useEffect, useContext} from 'react';
import { User } from './User/User.js';
import './users-container.scss';
import { appContext } from '../../../AppContext.js';

export function UsersContainer() {

    const context = useContext(appContext);

    useEffect(() => {
        if(context.renderUsers) {
            async function activate() {
                const resulte = await fetch('/users/api');
                const usersArray = await resulte.json();
                context.setUsersArray(usersArray)
            }
            activate();
            context.setRenderUsers(false);
        }
    }, [context.renderUsers]);

    return <div className='users-container'>
        {context.usersArray.map(user => <User
                key={user._id}
                userId={user._id}
                name={user.name}>
            </User>
        )}
    </div>
}