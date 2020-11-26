import React, {useState, useContext} from 'react';
import { appContext } from '../../../AppContext';
import './new-user.scss';

export function NewUser(){

    const context = useContext(appContext);

    const [newUserNotification, setNewUserNotification] = useState('');
    const [renderNewUserNotification, setRenderNewUserNotification] = useState(false);

    function handleNewUserError() {
        setRenderNewUserNotification(true)
        setTimeout(() => {
            setRenderNewUserNotification(false)
            setNewUserNotification('')
        }, 1500);
    }

    return <div className={'new-user-container'}>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(e.target.user.value === '') {
                    e.target.user.value = '';
                    setNewUserNotification('Enter name!');
                    handleNewUserError();
                } else if(context.usersArray.find(user => {
                    if(user.name === e.target.user.value) return true})) {
                    e.target.user.value = '';
                    setNewUserNotification("That's to many..");
                    handleNewUserError();
                } else if(context.usersArray.length >= 5) {
                    e.target.user.value = '';
                    setNewUserNotification('Max five users');
                    handleNewUserError();
                } else {
                    fetch('/users/api', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            name: e.target.user.value,
                        }),
                    }).then((res) => {
                        e.target.user.value = '';
                        context.setRenderUsers(true);
                    });
                }              
        }}>
            <input
                className={renderNewUserNotification ? 'notification' : ''}
                name='user'
                placeholder={renderNewUserNotification ? newUserNotification : 'Enter name'}></input>
            <input className='submit' type='submit' value='Add'></input>
        </form>
    </div>
}