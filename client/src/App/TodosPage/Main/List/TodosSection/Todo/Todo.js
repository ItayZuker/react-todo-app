import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {CheckTodo} from './CheckTodo/CheckTodo.js';
import {TodoBody} from './TodoBody/TodoBody.js';
import {OpenDetails} from './OpenDetails/OpenDetails.js';
import {TodoDetails} from './TodoDetails/TodoDetails.js';
import {appContext} from '../../../../../../AppContext';
import './todo.scss';

export function Todo(props) {

    const url = useParams()
    const context = useContext(appContext)
    const todo = context.todosArray.find(todo => todo._id === props.todoId) || {}
    
    const [display, setDisplay] = useState(true)
    const [deleteTodo, setDeleteTodo] = useState(false)
    const [openDetails, setOpenDetails] = useState(false)
    const [TaDam, setTaDam] = useState(false)

    useEffect(() => {
        if(context.clearCompletedClick === url.listId) {
            if(todo.completed) {
                context.setClearCompletedClick('')
                setDeleteTodo(true)
            }
        }
    }, [context.clearCompletedClick])

    useEffect(() => {
        if(context.deleteTodo === todo._id) {
            context.setDeleteTodo('')
            setDeleteTodo(true)
        }
    }, [context.deleteTodo])

    useEffect(() => {
        if(deleteTodo) {
            context.listsArray.forEach(list => {
                if (list._id === todo.listId && !todo.completed) {
                    list.todos --
                }
            });
            setTaDam(true)
            setTimeout(() => setTaDam(false), 2000)
            setTimeout(() => {
                fetch(`/todos/api/delete-todo/${todo._id}`, {
                    method: 'DELETE',
                    })
                    .then(() => {
                        context.setRenderTodos(true)
                    })
            }, 1000)
        }
    }, [deleteTodo])


    useEffect(() => {
        if (context.displayState.listId === url.listId) {
            if (context.displayState.state === 'active') {
                todo.completed ? setDisplay(false) : setDisplay(true)
            } else if (context.displayState.state === 'completed') {
                todo.completed ? setDisplay(true) : setDisplay(false)
            } else {
                setDisplay(true)
            }
        } else {
            setDisplay(true)
        }
    }, [context.displayState, context.renderTodos])


    return <div
        className={'todo-container ' + (display ? '' : 'hide')}
        >
        <div
            className={'tadam-contaoner ' + (TaDam ? 'active' : '')}>
            <h3>{TaDam ? 'TADAM!' : ''}</h3>
        </div>
        <div
            className={'todo-components-container ' + (TaDam ? 'hide' : '')}
            >
            <div className='todo-main'>
                <CheckTodo
                    todoId={todo._id}
                    todoCompleted={todo.completed}
                    todoBody={todo.body}
                    ></CheckTodo>
                <TodoBody
                    todoId={todo._id}
                    todoCompleted={todo.completed}
                    todoBody={todo.body}
                    ></TodoBody>
                <OpenDetails
                    openDetails={openDetails}
                    setOpenDetails={() => setOpenDetails(!openDetails)}
                    ></OpenDetails>
            </div>
            <TodoDetails
                todoId={todo._id}
                created={todo.created}
                openDetails={openDetails}
                setDeleteTodo={() => setDeleteTodo(true)}
                ></TodoDetails>
        </div>
    </div>
}