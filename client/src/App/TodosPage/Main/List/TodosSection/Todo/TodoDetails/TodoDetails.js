import React from 'react';
import {TodoSince} from './TodoSince/TodoSince.js';
import './todo-details.scss';

export class TodoDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openDetails: this.props.openDetails
        }
    }

    deleteTodo() {
        this.props.setDeleteTodo()
    }

    render() {
        return <div className={'todo-details-container ' + (this.props.openDetails ? '' : 'hide')}>
            <hr></hr>
            <div className='details-container'>
                <TodoSince
                    created={this.props.created}
                    ></TodoSince>
                <button
                    className='close-button'
                    onClick={() => {
                        this.setState({openDetails: false})
                        this.deleteTodo()
                    }}
                >
                <i className="fas fa-times"></i>
                </button>
            </div>
        </div>
    }
}