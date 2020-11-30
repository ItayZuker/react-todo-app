import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { appContext } from '../../../../../AppContext';
import './menu-item-delete-user.scss';

export function MenuItemDeleteUser(props) {

    const context = useContext(appContext);

    const url = useParams();
    const history = useHistory();


    return <div
        className='menu-item-container'
        onClick={() => {
            fetch(`/todos/api/delete-user/${props.user._id}`, {      //////  ---> Delete all this users todos
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res);                                    //////
            });
            fetch(`/lists/api/delete-user/${props.user._id}`, {      //////  ---> Delete all this users lists
                method: 'DELETE'                                         //
            })                                                           //
            .then((res) => {                                             //
                console.log(res)                                     //////
            });
            fetch(`/users/api/delete-user/${props.user._id}`, {      //////  ---> Delete this user
                method: 'DELETE'                                         //       and then go to home page
            })                                                           //
            .then((res) => {                                             //
                console.log(res)                                         //
                context.setRenderUsers(true);                            //
                history.push('/');                                   //////
            });
        }}
        >
        <p>Delete user</p>
        <p>x</p>
    </div>
}