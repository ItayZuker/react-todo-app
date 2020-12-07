import React, {useContext, useState} from 'react';
import { appContext } from '../../../../../../AppContext';
import './todo-input.scss';

export function TodoInput(props) {

    const context = useContext(appContext);

    const [todoNotification, setTodoNotification] = useState('');
    const [renderTodoNotification, setRenderTodoNotification] = useState(false);


    function handleNewTodoError() {                                     //
        setRenderTodoNotification(true)                                 //  ---> This function trigers notification
        setTimeout(() => {                                              //       with a deley
            setRenderTodoNotification(false)                            //
            setTodoNotification('')                                     //
        }, 1500);                                                       //
    }                                                                   //

    return <form
        onSubmit={(e) => {                                              //
            e.preventDefault();                                         //  ---> Submit with empty string
            if(e.target.todo.value === '') {                            //       will block submit and 
                e.target.todo.value = '';                               //       triger notification
                setTodoNotification('Nothig todo...');                  //
                handleNewTodoError();                                   
            } else if(props.list.find(todo => {                   //  
                if(todo.body === e.target.todo.value) return true})) {  //  ---> Submit with string that's
                e.target.todo.value = '';                               //       alredy exist would block submit
                setTodoNotification("Don't do it twice!");              //       and triger notification
                handleNewTodoError();                                   //
            } else {                                                    
                context.setListActive([props.listId, true])
                fetch('/todos/api/new-todo', {                          //  
                    method: 'POST',                                     //  ---> This fech create a new todo      
                    headers: {                                          //       for a specific list and then 
                        'Content-Type': 'application/json',             //       activets render for this List 
                    },                                                  //       component with props
                    body: JSON.stringify({                              //
                        userId: props.userId,                           //
                        listId: props.listId,                           //
                        body: e.target.todo.value,                      //
                        completed: false,                               //
                    }),                                                 //
                }).then((res) => {                                      //
                    console.log(res);                                   //
                    e.target.todo.value = '';                           //
                    context.setRenderList(props.listId);                //
                });
            };
        }}>
        <input
            className={renderTodoNotification ? 'notification' : ''}
            type='text'
            name='todo'
            placeholder={renderTodoNotification ? todoNotification : 'What needs to be done?'}
        ></input>
    </form>
}