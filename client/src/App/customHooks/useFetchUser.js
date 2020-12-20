import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import { appContext } from '../../AppContext';

export default function useFetchUser() {
    
    const url = useParams()
    const context = useContext(appContext)
    const [data, setData] = useState({})

    useEffect(() => {
        context.setRenderUser(false)
            async function getUsers() {
                const resulte = await fetch(`/users/api/get-user/${url.userId}`)
                const user = await resulte.json()
                context.setUser(user)
                setData(user)
            }
            getUsers()
    }, [context.renderUser])

    return data
}

