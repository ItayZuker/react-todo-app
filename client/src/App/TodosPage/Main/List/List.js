import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import useFetchList from '../../../customHooks/useFetchList.js';
import {ListHeader} from './ListHeader/ListHeader.js';
import {InputSection} from './InputSection/InputSection.js';
import {TodosSection} from './TodosSection/TodosSection.js';
import {FilterSection} from './FilterSection/FilterSection.js';
import {appContext} from '../../../../AppContext.js';
import './List.scss';

export function List(props) {

    const url = useParams()
    const list = useFetchList(props.userId, props.listId);
    const context = useContext(appContext)
    const [selectedList, setSelectedList] = useState(false)
    const [listDeleted, setListDeleted] = useState(false)


    useEffect(() => {                                               //////  ---> Update listDeleted state true
        if (context.listDeleted === props.listId) {                     //       instantly when this list is
            setListDeleted(true)                                        //       deleted for a quick visual respone
        }                                                               //
    }, [context.listDeleted])                                       //////


    useEffect(() => {                                               //////  ---> Update selectedList state
        if (url.listId === props.listId) {                              //       instantly when listId
            setSelectedList(true)                                       //       is changing in url
        } else {                                                        //
            setSelectedList(false)                                      //
        }                                                               //
    }, [url])                                                       //////
        

    return <div
        className={'list-container ' + (selectedList ? '' : 'hide ') + (listDeleted ? 'hide ' : '')}>
        <ListHeader
            list={list}
            userId={props.userId}
            listId={props.listId}
            listCompleted={props.listCompleted}
            listName={props.listName}
            ></ListHeader>
        <FilterSection
            listId={props.listId}
            list={list}
            listCompleted={props.listCompleted}
            ></FilterSection>
        <InputSection
            userId={props.userId}
            listId={props.listId}
            list={list}
            listCompleted={props.listCompleted}
            ></InputSection>
        <TodosSection
            listId={props.listId}
            list={list}
            ></TodosSection>
    </div>
}