import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../../../AppContext.js';
import { CheckAll } from './CheckAll/CheckAll.js';
import './upper-section.scss';



export function UpperSection(props) {

    let context = useContext(appContext);

    const user = useParams();

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
                        userId: user.userId,
                        body: e.target.todo.value,
                        completed: false,
                    }),
                }).then((res) => {
                    console.log(res);
                    e.target.todo.value = '';
                    context.setRenderTodos(true);
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