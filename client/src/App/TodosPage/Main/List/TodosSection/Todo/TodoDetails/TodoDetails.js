import React from 'react';
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
                <div className='time-container'>
                    <i class="far fa-calendar-alt"></i>{this.props.created} {/* <--- */}
                    <i class="fas fa-history"></i>{this.props.created} {/* <--- */}
                </div>
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