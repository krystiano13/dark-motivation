import {InfoWrap} from "../components/Info/InfoWrap";
import {HomeButton} from "../components/Home/HomeButton";
import {InfoText} from "../components/Info/InfoText";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import gsap from 'gsap';

const Info = () => {
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        gsap.set(textRef.current, { autoAlpha : 0, y : 100 });
        gsap.set(buttonRef.current, { autoAlpha : 0, y : 100});

        gsap.to(textRef.current, 0.35, { autoAlpha : 1, y : 0, delay : 0.25 });
        gsap.to(buttonRef.current, 0.35, { autoAlpha : 1, y : 0, delay : 0.75 });
    },[]);

    const handleNextStep = () => {
        gsap.to(buttonRef.current, 0.35, { autoAlpha : 0, y : 100 });
        gsap.to(textRef.current, 0.35, { autoAlpha : 0, y : 100, delay : 0.75 })
            .then(() => {});
    }

    return (
        <InfoWrap>
            <InfoText ref={textRef}>
                Welcome to my website. The purpose of it is to motivate you to
                work towards your goals. As the name suggests it will do it in
                a dark way. But before it, you'll need to answer few questions.
            </InfoText>
            <HomeButton onClick={handleNextStep} ref={buttonRef}>OK</HomeButton>
        </InfoWrap>
    );
}

export { Info };