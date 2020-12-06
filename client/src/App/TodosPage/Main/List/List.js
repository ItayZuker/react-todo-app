import React from 'react';
import useFetchList from '../../../customHooks/useFetchList.js';
import { InputSection } from './InputSection/InputSection.js';
import { TodosSection } from './TodosSection/TodosSection.js';
import { FilterSection } from './FilterSection/FilterSection.js';
import './List.scss';

export function List(props) {

    const list = useFetchList(props.userId, props.listId);

    return <div className='list-container'>
        <FilterSection
            listId={props.listId}
            listName={props.listName}
            list={list}
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