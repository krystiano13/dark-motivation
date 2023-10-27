import {InfoWrap} from "../components/Info/InfoWrap";
import {InfoText} from "../components/Info/InfoText";
import {HomeButton} from "../components/Home/HomeButton";
import {GenderButtons} from "../components/Gender/GenderButtons";

import gsap from 'gsap';
import { useEffect, useRef } from "react";

const Gender = () => {
    const maleButton = useRef(null);
    const femaleButton = useRef(null);

    useEffect(() => {
        gsap.set(maleButton.current,{ autoAlpha : 1 });
        gsap.set(femaleButton.current,{ autoAlpha : 1 });
    }, []);

    return (
        <InfoWrap>
            <InfoText>First question. What is your gender ?</InfoText>
            <GenderButtons>
                <HomeButton ref={maleButton}>Male</HomeButton>
                <HomeButton ref={femaleButton}>Female</HomeButton>
            </GenderButtons>
        </InfoWrap>
    )
}

export default Gender;