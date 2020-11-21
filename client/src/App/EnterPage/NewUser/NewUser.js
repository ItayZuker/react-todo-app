import React, {useState, useContext, useEffect} from 'react';
import { appContext } from '../../../AppContext';
import './new-user.scss';

export function NewUser(){

    const context = useContext(appContext);

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(context.userInput);
    }, [context.userInput]);

    return <div className={'new-user-container ' + (active ? 'active' : '')}>
        <form
            onSubmit={() => {}}>
            <input name='new-user' placeholder="Enter name..."></input>
            <input class='submit' type='submit' value='Add'></input>
        </form>
    </div>
}