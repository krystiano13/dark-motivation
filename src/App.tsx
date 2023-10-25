import React from 'react';
import gsap from 'gsap';
import { Main } from './components/Universal/Main';
import { HomeWrap } from "./components/Home/HomeWrap";
import { Title } from "./components/Home/Title";
import { HomeButton } from "./components/Home/HomeButton";

const App = () => {
    const homeRef = React.useRef(null);
    const [render, setRender] = React.useState(false);

    React.useEffect(() => {
        gsap.set(homeRef.current, { width : 0, scale : 0, autoAlpha : 0 });
        gsap.to(homeRef.current,0.25,{ scale : 1, autoAlpha : 0.5 });
        gsap.to(homeRef.current,0.25,{ width : 'auto', delay : 0.75, autoAlpha : 1 });
    }, []);

    return (
        <Main>
            <HomeWrap ref={homeRef}>
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