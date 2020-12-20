import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { appContext } from '../../../../../AppContext';
import './list-button.scss';

export function ListButton(props) {

    const url = useParams()
    const context = useContext(appContext);
    const list = context.listsArray.find(list => list._id === props.listId) || {};
    const [listDeleted, setListDeleted] = useState(false)

    useEffect(() => {
        if (context.listDeleted === props.listId) {
            setListDeleted(true)
        }
    }, [context.listDeleted])

    return <div
        className={'list-button-container ' + (listDeleted ? 'hide ' : '')}
        >
        <Link
            to={`/lists/${props.userId}/todos/${props.listId}`}
            className={(url.listId === props.listId ? 'selected ' : '') + (list.active ? 'active ' : '') + (list.allCompleted ? 'completed ' : '')}
            >{list.listName}
            </Link>
    </div>
}