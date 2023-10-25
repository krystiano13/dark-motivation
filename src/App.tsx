import React from 'react';
import { Main } from './components/Universal/Main';
import { HomeWrap } from "./components/Home/HomeWrap";
import { Title } from "./components/Home/Title";

const App = () => {
    return (
        <Main>
            <HomeWrap>
                <Title>Dark Motivation</Title>
            </HomeWrap>
        </Main>
    );
}

export { App };