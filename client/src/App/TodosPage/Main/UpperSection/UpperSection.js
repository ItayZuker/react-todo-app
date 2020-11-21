import React, { useContext } from 'react';
import { appContext } from '../../../../AppContext.js';
import { CheckAll } from './CheckAll/CheckAll.js';
import './upper-section.scss';



export function UpperSection(props) {

    let context = useContext(appContext);

    return <div className='upper-section-container'>
        <CheckAll></CheckAll>
        <form
            onSubmit={(e) => {
                e.preventDefault();
                fetch('/todos/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: props.userId,
                        body: e.target.todo.value,
                        complited: false,
                    }),
                }).then((res) => {
                    console.log(res);
                    e.target.todo.value = '';
                    context.setRenderList(true);
                })
        }}>
        <input
            type='text'
            name='todo'
            placeholder='what needs to be done?'
            ></input>
        </form>
    </div>
}