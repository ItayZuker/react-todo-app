import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../../../../AppContext';
import './menu-item-delete-user.scss';

export function MenuItemDeleteUser() {

    const url = useParams()
    const context = useContext(appContext)
    const history = useHistory()

    return <div
        className='menu-item-container'
        onClick={() => {
            context.usersArray.map((user, index) => {
                if (user._id === url.userId) context.usersArray.splice(index, 1)
            })
            context.setListsArray([])
            history.push('/')
            fetch(`/todos/api/delete-user/${url.userId}`, {
                method: 'DELETE'
            })
            fetch(`/lists/api/delete-user/${url.userId}`, {
                method: 'DELETE'
            })
            fetch(`/users/api/delete-user/${url.userId}`, {
                method: 'DELETE'
            })
            .then(() => {
                context.setRenderUsers(url.userId)
            })
        }}
        >
        <p>Delete user</p>
        <i className="fas fa-times"></i>
    </div>
}