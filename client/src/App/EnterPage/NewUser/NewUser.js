import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../AppContext';
import './new-user.scss';



export function NewUser(){

    const context = useContext(appContext);

    const [active, setActive] = useState(false);
    const [notification, setNotification] = useState(false)

    useEffect(() => {
        context.allUsers < 5 ? setActive(true) : setActive(false);
    }, [context.allUsers]);

    return <div className={'new-user-container'}>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(!active || e.target.user.value === '') {
                    e.target.user.value = '';
                    setNotification(true)
                    setTimeout(() => {
                        setNotification(false)
                    }, 2000);
                    return
                }
                fetch('/users/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: e.target.user.value,
                    }),
                }).then((res) => {
                    console.log(res);
                    e.target.user.value = '';
                    context.setRenderUsers(true);
                })
        }}>
            <input className={notification ? 'notification' : ''} name='user' placeholder={active ? "Enter name" : 'Max 5 users..'}></input>
            <input className='submit' type='submit' value='Add'></input>
        </form>
    </div>
}