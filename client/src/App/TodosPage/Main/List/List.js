import React from 'react';
import {useParams} from 'react-router-dom';
import {ListHeader} from './ListHeader/ListHeader.js';
import {InputSection} from './InputSection/InputSection.js';
import {TodosSection} from './TodosSection/TodosSection.js';
import {FilterSection} from './FilterSection/FilterSection.js';
import './List.scss';

export function List() {

    const url = useParams()

    return <div
        className={'list-container ' + (url.listId ? '' : 'hide')}>
        <ListHeader></ListHeader>
        <FilterSection></FilterSection>
        <InputSection></InputSection>
        <TodosSection></TodosSection>
    </div>
}