import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import {HomeWrap} from "../components/Home/HomeWrap";
import {HomeButton} from "../components/Home/HomeButton";
import {Title} from "../components/Home/Title";

const Home = () => {
    const homeRef = useRef(null);
    const [render, setRender] = useState(false);

    useEffect(() => {
        gsap.set(homeRef.current, {width: 0, scale: 0, autoAlpha: 0});
        gsap.to(homeRef.current, 0.25, {scale: 1, autoAlpha: 0.5});
        gsap.to(homeRef.current, 0.25, {width: 'auto', delay: 0.75, autoAlpha: 1});
    }, []);

    const proceed = () => {
        gsap.to(homeRef.current, 0.35, {width: 0, autoAlpha: 0.5});
        gsap.to(homeRef.current, 0.35, {scale: 0, autoAlpha: 0, delay: 0.75});
    }

    return (
        <HomeWrap ref={homeRef}>
            <Title>
                Dark Motivation
                <br/>
                <HomeButton onClick={proceed}>Proceed</HomeButton>
            </Title>
        </HomeWrap>
    )
}

export { Home };