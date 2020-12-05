import React, {useContext} from 'react';
import { appContext } from '../../../../../AppContext';
// import { List } from '../../List/List';
import './new-list.scss';

export function NewList(props) {

    const context = useContext(appContext);

    return <div
        className='new-list-container'>
        <form
            onSubmit={e => {
                e.preventDefault();
                fetch(`/lists/api/create-list/${props.userId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        listName: e.target.listName.value,
                    })
                })
                .then((res) => {
                    console.log(res);
                    context.setRenderUser(props.userId);
                })

            }}
            >
            <input
                name='listName'
                className='new-list'
                type='text'
                placeholder='Add list'
            >
            </input>
            <button
                type='submit'
                className='submit'
                >
                <i className="fas fa-plus"></i>
            </button>    
        </form>
    </div>
}