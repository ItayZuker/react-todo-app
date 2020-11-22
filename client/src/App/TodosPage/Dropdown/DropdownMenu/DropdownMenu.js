import React, {Redirect} from 'react';
import './dropdown-menu.scss';

export function DropdownMenu(props) {
    return <div className={'dropdown-menu-container ' + (props.openState ? 'open' : '')}>
        <div
            className='menu-item-container'
            onClick={() => {
                fetch(`/users/api/${props.userId}`, {
                    method: 'DELETE'
                });
                // return to main page ?????
            }}
            >
            <p>Delete user</p>
            <p>x</p>
        </div>
    </div>
}