import React from 'react';
import './open-details.scss';

export function OpenDetails(props) {
    
    return <div
        className='open-details-container'
        >
        <button
            className='open-button'
            onClick={() => {
                props.setOpenDetails();
            }}
        >
        <i class={"fas fa-angle-down " + (props.openDetails ? '' : 'left')}></i>
        </button>
    </div>
}