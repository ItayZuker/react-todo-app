import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { appContext } from '../../../../AppContext';
import useFetchLists from '../../../customHooks/useFetchLists';
import './user.scss';

export function User(props) {

    const lists = useFetchLists(props.userId)
    const context = useContext(appContext)
    const [listIdToGoTo, setListIdToGoTo] = useState('')


    useEffect(() => {                                           //////  ---> Update listToGoTo state
        if (lists.length > 0) {                                     //       to be the first list of
            setListIdToGoTo(lists[0]._id)                           //       this user
        } else {                                                    //
            setListIdToGoTo('')                                     //
        }                                                           //
    }, [lists])                                                 //////


    return <div
        className='link-container'
        onClick={() => context.setSelectedList(listIdToGoTo)}
        >
        <Link
            to={`/lists/${props.userId}/todos/${listIdToGoTo}`}
            className='link'
            >{props.name}
        </Link>
    </div>
}