import React, {useContext} from 'react';
import { UsersContainer } from './UsersContainer/UsersContainer.js';
import { NewUser } from './NewUser/NewUser.js';
import './enter-page.scss';
import { appContext } from '../../AppContext.js';

export function EnterPage() {

    const context = useContext(appContext);

    const allUsers = context.usersArray.length;

    return <div className='enter-page-container'>
        <div className='logo-container'>
            <h1>TaDam!</h1>
            <h2>It's Done.</h2>
        </div>
        <div className='users-new-users-containet'>
            <h3>{allUsers > 0 ? 'Choose /' : '' } Create your list (<span className={allUsers < 5 ? '' : 'max-five'}>{allUsers}/5</span>):</h3>
            <UsersContainer></UsersContainer>
            <NewUser></NewUser>
        </div>
    </div>
}