import {useState, useEffect, useContext} from 'react';
import { appContext } from '../../AppContext';

export default function useFetchLists(userId) {

    const context = useContext(appContext)
    const [data, setData] = useState([])
    const [renderLists, setRenderLists] = useState(true)

    useEffect(() => {
        if (context.renderLists === userId) {
            context.setRenderLists('')
            setRenderLists(true);
        }
    }, [context.renderLists])

    useEffect(() => {
        if(renderLists) {
            async function getUsers() {
                const result = await fetch(`/lists/api/get-user-lists/${userId}`);
                const lists = await result.json();
                context.setRenderUser(userId)
                setRenderLists(false);
                setData(lists)
            }
            getUsers()
        }
    }, [renderLists]);

    return data
}

