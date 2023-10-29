import {DateWrapper} from "../components/Date/DateWrapper";
import {InfoText} from "../components/Info/InfoText";
import {DateInput} from "../components/Date/DateInput";
import {HomeButton} from "../components/Home/HomeButton";

import gsap from 'gsap';
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

interface DateProps {
    setDate: (date:Date) => void
}

const Date:React.FC<DateProps> = ({ setDate }) => {
    const text = useRef(null);
    const date = useRef<HTMLInputElement>(null);
    const btn = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        gsap.set([text.current, date.current, btn.current], { y : 100, autoAlpha : 0 });
        gsap.to(text.current, 0.35, { y : 0, autoAlpha : 1, delay : 0.2 });
        gsap.to(date.current, 0.35, { y : 0, autoAlpha : 1, delay : 0.6 });
        gsap.to(btn.current, 0.35, { y : 0, autoAlpha : 1, delay : 1 })
    }, []);

    const confirm = () => {
        gsap.to(btn.current, 0.35, { y : 100, autoAlpha : 0, delay : 0.2 });
        gsap.to(date.current, 0.35, { y : 100, autoAlpha : 0, delay : 0.6 });
        gsap.to(text.current, 0.35, { y : 100, autoAlpha : 0, delay : 1 })
            .then(() => {
                if(date.current) {
                    setDate(date.current.valueAsDate as Date);
                }
            })
            .then(() => navigate('/result'));
    }

    return (
        <DateWrapper>
            <InfoText ref={text}>Now. Choose your date of birth...</InfoText>
            <DateInput ref={date} type='date' />
            <HomeButton onClick={confirm} ref={btn}>Confirm</HomeButton>
        </DateWrapper>
    )
}

export default Date;