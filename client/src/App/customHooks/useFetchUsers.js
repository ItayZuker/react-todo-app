import {useState, useEffect, useContext} from 'react';
import { appContext } from '../../AppContext';

export default function useFetchUsers() {

    const context = useContext(appContext)
    const [data, setData] = useState([])

    useEffect(() => {
            async function getUsers() {
                const resulte = await fetch('/users/api/get-users');
                const users = await resulte.json();
                context.setUsersArray(users);
                context.setRenderUsers(false);
                setData(users)
            }
            getUsers()
    }, [context.renderUsers]);

    return data
}

