import React from 'react';
import { Main } from './components/Universal/Main';
import { HomeWrap } from "./components/Home/HomeWrap";
import { Title } from "./components/Home/Title";
import { HomeButton } from "./components/Home/HomeButton";

const App = () => {
    return (
        <Main>
            <HomeWrap>
                <Title>
                    Dark Motivation
                    <br />
                    <HomeButton>Proceed</HomeButton>
                </Title>
            </HomeWrap>
        </Main>
    );
}

export { App };