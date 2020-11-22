import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { appContext } from '../../../../AppContext';
import './dropdown-menu.scss';

export function DropdownMenu(props) {

    const context = useContext(appContext);

    const history = useHistory(); // ---> This hook is for navigation control

    return <div className={'dropdown-menu-container ' + (props.openState ? 'open' : '')}>
        <div
            className='menu-item-container'
            onClick={() => {
                fetch(`/users/api/${props.userId}`, {
                    method: 'DELETE'
                }).then(() => {
                    history.push('/'); // ---> Go to homepage
                    context.setRenderUsers(true);
                })
            }}
            >
            <p>Delete user</p>
            <p>x</p>
        </div>
    </div>
}