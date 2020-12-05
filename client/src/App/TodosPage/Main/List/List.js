import React, {useState, useEffect, useContext} from 'react';
import { InputSection } from './InputSection/InputSection.js';
import { TodosSection } from './TodosSection/TodosSection.js';
import { FilterSection } from './FilterSection/FilterSection.js';
import { appContext } from '../../../../AppContext.js';
import './List.scss';

export function List(props) {

    const context = useContext(appContext);

    let [todosArray, setTodosArray] = useState([]);
    let [render, setRender] = useState(true);


    useEffect(() => {                                                           //////  ---> Update allCompleted state and
        if(todosArray.filter(todo => todo.completed === false).length > 0) {        //       number of todos for this list
            context.setAllTodosNotCompleted(props.listId);                          //       every time the list renders
            fetch(`/lists/api/update-list/${props.listId}`, {                       //       
                method: 'PUT',                                                      //
                headers: {                                                          //
                    'Content-Type': 'application/json',                             //
                },                                                                  //
                body: JSON.stringify({                                              //
                    completed: false,                                               //
                    todos: todosArray.length,                                       //
                }),                                                                 //
            })                                                                      //
            .then((res) => {                                                        //
                console.log(res);                                                   //
                context.setRenderUser(props.userId);                                //
            });                                                                     //
        } else {                                                                    //       
            context.setAllTodosCompleted(props.listId);                             //
            fetch(`/lists/api/update-list/${props.listId}`, {                       //
                method: 'PUT',                                                      //
                headers: {                                                          //
                    'Content-Type': 'application/json',                             //
                },                                                                  //
                body: JSON.stringify({                                              //
                    completed: true,                                                //
                    todos: todosArray.length,                                       //
                }),                                                                 //
            })                                                                      //
            .then((res) => {                                                        //
                console.log(res);                                                   //
                context.setRenderUser(props.userId);                                //
            });                                                                     //
        };                                                                          //
    }, [render]);                                                               //////


    useEffect(() => {                                                           //////  ---> Render todos for this list 
        if(render) {                                                                //       will fetch once when module load
            async function activate() {                                             //       and again when trigerd by 
                const result = await fetch(`/todos/api/get-list/${props.listId}`);  //       setRender state           
                const todos = await result.json();                                  //       
                setTodosArray(todos);                                               //
                setRender(false);                                                   //
                context.setNewArray([props.listId, todos]);                         //
            };                                                                      //
            activate();                                                             //
        };                                                                          //                        
    }, [render]);                                                               //////


    useEffect(() => {                                                           //////  ---> Liseten to render calls
        if(context.renderList === props.listId) {                                   //       for this list and then trigers
            context.setRenderUser(props.userId);                                    //       render for this list 
            context.setRenderList('');                                              //       and for this user
            setRender(true);                                                        //      
        }                                                                           //       
    }, [context.renderList])                                                    //////


    return <div className='list-container'>
        <FilterSection
            listId={props.listId}
            todosArray={todosArray}
            listName={props.listName}
            ></FilterSection>
        <InputSection
            userId={props.userId}
            listId={props.listId}
            todosArray={todosArray}
            ></InputSection>
        <TodosSection
            listId={props.listId}
            todosArray={todosArray}
            ></TodosSection>
    </div>
}