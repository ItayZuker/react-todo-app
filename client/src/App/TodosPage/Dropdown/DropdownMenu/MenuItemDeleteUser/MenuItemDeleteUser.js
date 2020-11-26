import React, {useContext} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { appContext } from '../../../../../AppContext';
import './menu-item-delete-user.scss';

export function MenuItemDeleteUser() {

    const context = useContext(appContext);

    const params = useParams();

    const history = useHistory();                                        // ---> This hook is for navigation control

    return <div
        className='menu-item-container'                                  //
        onClick={() => {                                                 //
            fetch(`/users/api/${params.userId}`, {                       //  ---> Delete this user
                method: 'DELETE'                                         //
            }).then((res) => {                                           //
                console.log(res)                                         //
                history.push('/');                                       //
                context.setRenderUsers(true);                            //
            }).then(() => {                                              //
                fetch(`/todos/api/clear-user-todos/${params.userId}`, {  //  ---> Delete this users todos
                    method: 'DELETE'                                     //
                }).then(() => {                                          //

                })
            })
        }}
        >
        <p>Delete user</p>
        <p>x</p>
    </div>
}