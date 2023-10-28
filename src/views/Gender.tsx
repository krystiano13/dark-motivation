import {InfoWrap} from "../components/Info/InfoWrap";
import {InfoText} from "../components/Info/InfoText";
import {HomeButton} from "../components/Home/HomeButton";
import {GenderButtons} from "../components/Gender/GenderButtons";

import gsap from 'gsap';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface GenderProps {
    setGender: (gender: 'male' | 'female') => void
}

const Gender: React.FC<GenderProps> = ({ setGender }) => {
    const maleButton = useRef(null);
    const femaleButton = useRef(null);
    const textRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        gsap.set([maleButton.current, femaleButton.current, textRef.current],
            { y : 100, autoAlpha : 0 });
        gsap.to(textRef.current, 0.35 ,{ y : 0, autoAlpha : 1 });
        gsap.to(maleButton.current, 0.35 ,{ y : 0, autoAlpha : 1, delay : 0.5 });
        gsap.to(femaleButton.current, 0.35 ,{ y : 0, autoAlpha : 1, delay : 0.65 });
    }, []);

    const handleChooseGender = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(!e.target) return;

        const id = (e.target as HTMLElement).id;
        setGender(id as 'male' | 'female');

        gsap.to([femaleButton.current,maleButton.current], 0.35 ,{ y : 100, autoAlpha : 0 });
        gsap.to(textRef.current, 0.35 ,{ y : 100, autoAlpha : 0, delay : 0.5 })
            .then(() => {
                navigate('/date');
            })
    }

    return (
        <InfoWrap>
            <InfoText ref={textRef}>First question. What is your gender ?</InfoText>
            <GenderButtons>
                <HomeButton onClick={(e) => handleChooseGender(e)} id='male' ref={maleButton}>Male</HomeButton>
                <HomeButton onClick={(e) => handleChooseGender(e)} id='female' ref={femaleButton}>Female</HomeButton>
            </GenderButtons>
        </InfoWrap>
    )
}

export default Gender;