import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './menu-item-delete-user.scss';

export function MenuItemDeleteUser() {

    const url = useParams()
    const context = useContext(appContext);
    const history = useHistory();


    return <div
        className='menu-item-container'
        onClick={() => {
            fetch(`/todos/api/delete-user/${url.userId}`, {          //////  ---> Delete all this users todos
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res);                                    //////
            });
            fetch(`/lists/api/delete-user/${url.userId}`, {          //////  ---> Delete all this users lists
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res)                                     //////
            });
            fetch(`/users/api/delete-user/${url.userId}`, {          //////  ---> Delete this user
                method: 'DELETE'                                         //       and then go to home page
            })                                                           //
            .then((res) => {                                             //
                console.log(res)                                         //
                context.setRenderUsers(url.userId);                      //
                history.push('/');                                   //////
            });
        }}
        >
        <p>Delete user</p>
        <i className="fas fa-times"></i>
    </div>
}