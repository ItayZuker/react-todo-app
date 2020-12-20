import React, {useContext} from 'react';
import {User} from './User/User.js';
import useFetchUsers from '../../customHooks/useFetchUsers.js';
import { appContext } from '../../../AppContext.js';
import './users-container.scss';

export function UsersContainer() {

    const context = useContext(appContext)
    useFetchUsers()

    return <div className='users-container'>
        {context.usersArray.map(user => <User
                key={user._id}
                userId={user._id}
                name={user.name}>
            </User>
        )}
    </div>
}