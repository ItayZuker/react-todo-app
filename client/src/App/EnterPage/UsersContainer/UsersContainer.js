import React from 'react';
import {User} from './User/User.js';
import useFetchUsers from '../../customHooks/useFetchUsers.js';
import './users-container.scss';

export function UsersContainer() {

    const users = useFetchUsers()

    return <div className='users-container'>
        {users.map(user => <User
                key={user._id}
                userId={user._id}
                name={user.name}>
            </User>
        )}
    </div>
}