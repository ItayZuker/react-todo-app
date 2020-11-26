import { CheckAll } from './CheckAll/CheckAll.js';
import { TodoInput } from './TodoInput/TodoInput.js';
import './upper-section.scss';

export function UpperSection() {

    return <div className='upper-section-container'>
        <CheckAll></CheckAll>
        <TodoInput></TodoInput>
    </div>
}