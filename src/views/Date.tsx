import {DateWrapper} from "../components/Date/DateWrapper";
import {InfoText} from "../components/Info/InfoText";
import {DateInput} from "../components/Date/DateInput";

import gsap from 'gsap';
import { useEffect, useRef } from "react";

const Date = () => {
    const text = useRef(null);
    const date = useRef(null);

    useEffect(() => {
        gsap.set([text.current, date.current], { y : 100, autoAlpha : 0 });
        gsap.to(text.current, 0.35, { y : 0, autoAlpha : 1, delay : 0.2 });
        gsap.to(date.current, 0.35, { y : 0, autoAlpha : 1, delay : 0.6 })
    }, []);

    return (
        <DateWrapper>
            <InfoText ref={text}>Now. Choose your date of birth...</InfoText>
            <DateInput ref={date} type='date' />
        </DateWrapper>
    )
}

export default Date;