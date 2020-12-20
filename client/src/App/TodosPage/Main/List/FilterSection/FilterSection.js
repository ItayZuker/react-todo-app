import React from 'react';
import { FilterDisplayPanel } from './FilterDisplayPanel/FilterDisplayPanel.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './filter-section.scss';

export function FilterSection() {
    
    return <div className='filter-section-container'>
        <Counter></Counter>
        <FilterDisplayPanel></FilterDisplayPanel>
        <ClearCompleted></ClearCompleted>
    </div>
}
