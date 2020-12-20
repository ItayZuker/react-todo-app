import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../AppContext';

export default function useFetchLists() {

    const url = useParams()
    const context = useContext(appContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        context.setRenderLists(false)
        async function getUsers() {
            const result = await fetch(`/lists/api/get-user-lists/${url.userId}`)
            const lists = await result.json()
            context.setListsArray(lists)
            context.setRenderUser(true)
            setData(lists);
        }
        getUsers()    
    }, [context.renderLists])

    return data
}

