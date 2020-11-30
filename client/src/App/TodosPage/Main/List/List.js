import React, {useState, useEffect, useContext} from 'react';
import { UpperSection } from './UpperSection/UpperSection.js';
import { TodosSection } from './TodosSection/TodosSection.js';
import { LowerSection } from './LowerSection/LowerSection.js';
import { appContext } from '../../../../AppContext.js';
import './List.scss';

async function getTodos(listId) {                                             //////  ---> The fetch for this lists todosArray
    const result = await fetch(`/todos/api/get-list/${listId}`);                  //
    return result.json();                                                         //
}                                                                             //////

export function List(props) {

    const context = useContext(appContext);

    let [todosArray, setTodosArray] = useState([]);
    let [render, setRender] = useState(true);

    
    useEffect(() => {                                                         //////  ---> Update allCompleted state
        if(todosArray.filter(todo => todo.completed === false).length > 0) {      //       every time the list renders
            context.setAllTodosNotCompleted(props.listId);                        //
        } else {                                                                  //       
            context.setAllTodosCompleted(props.listId);                           //
        };                                                                        //
    }, [todosArray]);                                                         //////


    useEffect(() => {                                                         //////  ---> Render todos for this list 
        if(render) {                                                              //       will fetch once when module load
            async function activate() {                                           //       and again when trigerd by 
                const todosList = await getTodos(props.listId);                   //       setRender state           
                setTodosArray(todosList);                                         //
                setRender(false);                                                 //
            };                                                                    //
            activate();                                                           //
        };                                                                        //                        
    }, [render]);                                                             //////


    useEffect(() => {                                                         //////  ---> Liseten to render calls
        if(context.renderList === props.listId) {                                 //       for this list and then trigers
            context.setRenderList('');                                            //       the render function
            setRender(true);                                                      //      
        }                                                                         //       
    }, [context.renderList])                                                  //////


    return <div className='list-container'>
        <UpperSection
            userId={props.userId}
            listId={props.listId}
            todosArray={todosArray}
            ></UpperSection>
        <TodosSection
            listId={props.listId}
            todosArray={todosArray}
            ></TodosSection>
        <LowerSection
            listId={props.listId}
            todosArray={todosArray}
            ></LowerSection>
    </div>
}