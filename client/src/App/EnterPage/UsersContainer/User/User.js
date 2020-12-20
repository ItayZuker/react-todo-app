import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './user.scss';

export function User(props) {

    const [userLists, setUserLists] = useState([])
    
    useEffect(() => {
        async function getLists() {
            const result = await fetch(`/lists/api/get-user-lists/${props.userId}`)
            const lists = await result.json() 
            setUserLists(lists)
        }
        getLists()
    }, [])

    return <div
        className='link-container'
        >
        <Link
            to={`/lists/${props.userId}/todos/${userLists.length > 0 ? userLists[0]._id : ''}`}
            className='link'
            >{props.name}
        </Link>
    </div>
}