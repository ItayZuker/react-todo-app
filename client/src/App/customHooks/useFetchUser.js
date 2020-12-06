import {useState, useEffect, useContext} from 'react';
import { appContext } from '../../AppContext';

export default function useFetchUser(userId) {

    const context = useContext(appContext)
    const [data, setData] = useState({})
    const [renderUser, setRenderUser] = useState(true);

    useEffect(() => {
        if (context.renderUser === userId) {
            context.setRenderUser('')
            setRenderUser(true)
        }
    }, [context.renderUser])

    useEffect(() => {
        if(renderUser) {
            async function getUsers() {
                const resulte = await fetch(`/users/api/get-user/${userId}`);
                const user = await resulte.json();
                setRenderUser(false)
                setData(user)
            }
            getUsers()
        }
    }, [renderUser]);

    return data
}

