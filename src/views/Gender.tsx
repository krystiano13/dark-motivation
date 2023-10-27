import {InfoWrap} from "../components/Info/InfoWrap";
import {InfoText} from "../components/Info/InfoText";
import {HomeButton} from "../components/Home/HomeButton";
import {GenderButtons} from "../components/Gender/GenderButtons";

import gsap from 'gsap';
import { useEffect, useRef } from "react";

const Gender = () => {
    const maleButton = useRef(null);
    const femaleButton = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        gsap.set([maleButton.current, femaleButton.current, textRef.current],
            { y : 100, autoAlpha : 0 });
        gsap.to(textRef.current, 0.35 ,{ y : 0, autoAlpha : 1 });
        gsap.to(maleButton.current, 0.35 ,{ y : 0, autoAlpha : 1, delay : 0.5 });
        gsap.to(femaleButton.current, 0.35 ,{ y : 0, autoAlpha : 1, delay : 0.65 });
    }, []);

    return (
        <InfoWrap>
            <InfoText ref={textRef}>First question. What is your gender ?</InfoText>
            <GenderButtons>
                <HomeButton ref={maleButton}>Male</HomeButton>
                <HomeButton ref={femaleButton}>Female</HomeButton>
            </GenderButtons>
        </InfoWrap>
    )
}

export default Gender;