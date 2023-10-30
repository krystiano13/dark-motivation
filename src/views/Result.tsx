import {ResultWrap} from "../components/Result/ResultWrap";
import {ResultModal,ResultBar, ResultInfo} from "../components/Result/ResultModal";
import {ResultButton, ResultText} from "../components/Result/ResultModal";

import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";

interface ResultProps {
    gender : 'male' | 'female' | undefined;
    date: Date | undefined
}

const Result: React.FC<ResultProps> = ({ gender, date }) => {
    const [modal, setModal] = useState<boolean>(true);
    const modalRef = useRef(null);
    const [fullWeeks, setFullWeeks] = useState<number>(0);

    useEffect(() => {
        gsap.set(modalRef.current, { y : 100, autoAlpha : 0 });
        gsap.to(modalRef.current, 0.35 , { y : 0, autoAlpha : 1, delay : 0.15 });

        if(!gender || !date) return;

        let fullYears:number;
        let yearsLeft:number;

        if(gender === 'male') {
            fullYears = 69;
        }
        else {
            fullYears = 74;
        }

        setFullWeeks(fullYears);

    }, []);

    const closeModal = () => {
        gsap.to(modalRef.current, 0.35 , { y : 100, autoAlpha : 0, delay : 0.15 })
            .then(() => setModal(false));
    }

    return (
        <ResultWrap>
            {
                modal && <ResultModal ref={modalRef}>
                    <ResultBar>
                        <ResultButton onClick={closeModal}>X</ResultButton>
                    </ResultBar>
                    <ResultInfo>
                        <ResultText>
                            Based on data from you, app created large amount of boxes.
                            Ones, that are filled represents lived weeks. Empty ones
                            represents future weeks of your life. Amount of empty boxes
                            is based on average lifespan of males and females. Check that
                            boxes sometimes and remember, that your time is limited.
                        </ResultText>
                    </ResultInfo>
                </ResultModal>
            }
        </ResultWrap>
    )
}

export default Result;