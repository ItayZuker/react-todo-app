import React from 'react';
import { FilterDisplayPanet } from './FilterDisplayPanet/FilterDisplayPanet.js';
import { ClearCompleted } from './ClearCompleted/ClearCompleted.js';
import { Counter } from './Counter/Counter.js';
import './lower-section.scss';

export function LowerSection() {
    return <div className='lower-section-container'>
        <Counter></Counter>
        <FilterDisplayPanet></FilterDisplayPanet>
        <ClearCompleted></ClearCompleted>
    </div>
}