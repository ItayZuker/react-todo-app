import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {UsersContainer} from './UsersContainer/UsersContainer.js';
import {NewUser} from './NewUser/NewUser.js';
import {appContext} from '../../AppContext.js';
import styled from 'styled-components';
// import './enter-page.scss';

const EnterPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FF6E6E;
    margin: 0px 0px 10vh 0px;
`;
const LogoMain = styled.h1`
    font-size: 80px;
    font-weight: 400;
    margin: 0px;
`
const LogoSecond = styled.h2`
    color: #6DD3FF;
    font-weight: 500;
    margin: 0px;
    &:hover {
        color: gray;
        text-decoration: line-through;
        text-decoration-color: #6DD3FF;
        cursor: default;
    }
`
const MainUsersContainet = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0px 0px 0px 0px;
    color: $red-color;
`
const SmallTitel = styled.h3`
    color: lightgray;
    margin: 0px 0px 0px 0px;
    font-weight: 500;
`
const MaxFive = styled.span`
    ${props => props.allUsers > 5 &&`
        color: #FF6E6E;
    `}
`

export function EnterPage() {

    const context = useContext(appContext);
    const url = useParams();
    const allUsers = context.usersArray.length;

    return <EnterPageDiv>
        <LogoContainer>
            <LogoMain>TaDam!</LogoMain>
            <LogoSecond>It's Done.</LogoSecond>
        </LogoContainer>
        <MainUsersContainet>
            <SmallTitel>
                {allUsers > 0 ? 'Choose /' : '' } Create your list (<MaxFive allUsers>{allUsers}/5</MaxFive>):
            </SmallTitel>
            <UsersContainer></UsersContainer>
            <NewUser
                userId={url.userId}
                ></NewUser>
        </MainUsersContainet>
    </EnterPageDiv>
}