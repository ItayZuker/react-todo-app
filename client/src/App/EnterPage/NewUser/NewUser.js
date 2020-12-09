import React, {useState, useContext} from 'react';
import { appContext } from '../../../AppContext';
import './new-user.scss';

export function NewUser(props){

    const context = useContext(appContext);

    const [newUserNotification, setNewUserNotification] = useState('');
    const [renderNewUserNotification, setRenderNewUserNotification] = useState(false);


    function handleNewUserError() {                                         //////  ---> Activet notifacation with
        setRenderNewUserNotification(true)                                      //       .setTimeout()
        setTimeout(() => {                                                      //
            setRenderNewUserNotification(false)                                 //
            setNewUserNotification('')                                          //
        }, 1500);                                                           //////
    }

    return <div className={'new-user-container'}>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if(e.target.user.value === '') {                            //////  ---> Validation for new user
                    e.target.user.value = '';                                   //
                    setNewUserNotification('Enter name!');                      //
                    handleNewUserError();                                       //
                } else if(context.usersArray.find(user => {                     //
                    if(user.name === e.target.user.value) return true})) {      //
                    e.target.user.value = '';                                   //
                    setNewUserNotification('Already exist..');                  //
                    handleNewUserError();                                       //
                } else if(context.usersArray.length >= 5) {                     //
                    e.target.user.value = '';                                   //
                    setNewUserNotification('Max five users');                   //
                    handleNewUserError();                                       //
                } else {
                    fetch('/users/api/create-user', {                           //  ---> fetch to create the new user
                        method: 'POST',                                         // 
                        headers: {                                              //
                            'Content-Type': 'application/json',                 //
                        },                                                      //
                        body: JSON.stringify({                                  //
                            name: e.target.user.value,                          //
                        }),                                                     //
                    })                                                          //
                    .then(res => res.json())                                    //
                    .then(res => {                                              
                        e.target.user.value = '';                               //  ---> Then fetch create first empty list
                        fetch(`/lists/api/create-list/${res._id}`, {            //       for this user
                                method: 'POST',                                 //
                                headers: {                                      //
                                    'Content-Type': 'application/json',         //
                                },                                              //
                                body: JSON.stringify({                          //
                                    listName: 'Master list'                     //
                                }),                                             //
                            })                                                  //
                            .then(() => {                                       //
                                context.setRenderUsers(props.userId);       //////  ---> then render users
                            })
                    });
                };              
        }}>
            <input
                className={renderNewUserNotification ? 'notification' : ''}
                name='user'
                placeholder={renderNewUserNotification ? newUserNotification : 'Enter name'}></input>
            <input className='submit' type='submit' value='Add'></input>
        </form>
    </div>
}