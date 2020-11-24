import React, {useState, useContext} from 'react';
import { appContext } from '../../../AppContext';
import './new-user.scss';

export function NewUser(){

    const context = useContext(appContext);

    const [notification, setNotification] = useState('');
    const [renderNotification, setRenderNotification] = useState(false);

    function handleError() {
        setRenderNotification(true)
        setTimeout(() => {
            setRenderNotification(false)
            setNotification('')
        }, 1500);
    }

    return <div className={'new-user-container'}>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(e.target.user.value === '') {
                    e.target.user.value = '';
                    setNotification('Enter name!');
                    handleError();
                } else if(context.usersArray.find(user => {
                    if(user.name === e.target.user.value) return true})) {
                    e.target.user.value = '';
                    setNotification('No doubles..');
                    handleError();
                } else if(context.usersArray.length >= 5) {
                    e.target.user.value = '';
                    setNotification('Max five users');
                    handleError();
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
                className={renderNotification ? 'notification' : ''}
                name='user'
                placeholder={renderNotification ? notification : 'Enter name'}></input>
            <input className='submit' type='submit' value='Add'></input>
        </form>
    </div>
}