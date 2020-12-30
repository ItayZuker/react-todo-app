import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import emailjs from 'emailjs-com';
import {UsersContainer} from './UsersContainer/UsersContainer.js';
import {NewUser} from './NewUser/NewUser.js';
import {appContext} from '../../AppContext.js';
import {Footer} from './Footer/Footer.js';
import styled from 'styled-components';

const EnterPageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FF6E6E;
    margin: 15vh 0px -30vh 0px;
`;
const LogoMain = styled.h1`
    font-size: 80px;
    font-weight: 600;
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
`
const SmallTitel = styled.h3`
    color: lightgray;
    margin: 25px 0px 0px 0px;
    font-weight: 500;
`
const MaxFive = styled.span`
    ${props => props.allUsers > 4 &&`
        color: #FF6E6E;
    `}
`

export function EnterPage() {

    const context = useContext(appContext)
    const url = useParams()
    const allUsers = context.usersArray.length

    function getTime() {
        const minutes = addZiro(new Date().getMinutes())
        const hours = addZiro(new Date().getHours())
        return (`${hours}:${minutes}`)
    }
    function getDay() {
        const day = addZiro(new Date().getDate())
        const month = addZiro(new Date().getMonth() + 1)
        const year = new Date().getFullYear()
        return (`${day}/${month}/${year}`)
    }
    function addZiro(num) {
        return num < 10 ? `0${num}` : num
    }
    const time = getTime()
    const day = getDay()

    emailjs.send('gmail', 'enter_notification', {time: time, day: day}, 'user_isbKMcCXhDYiE3zZ3tzbF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      return <EnterPageDiv>
        <LogoContainer>
            <LogoMain>TADAM!</LogoMain>
            <LogoSecond>It's Done.</LogoSecond>
        </LogoContainer>
        <MainUsersContainet>
            <SmallTitel>
                {allUsers > 0 ? 'Choose /' : '' } Create user (<MaxFive allUsers={allUsers}>{allUsers}/5</MaxFive>):
            </SmallTitel>
            <UsersContainer></UsersContainer>
            <NewUser
                userId={url.userId}
                ></NewUser>
        </MainUsersContainet>
        <Footer></Footer>
    </EnterPageDiv>
}