import {ResultWrap} from "../components/Result/ResultWrap";
import {ResultModal,ResultBar, ResultInfo} from "../components/Result/ResultModal";
import {ResultButton, ResultText} from "../components/Result/ResultModal";
import {BoxItem} from "../components/Result/BoxItem";

import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";
import {Box} from "../types/Box";

interface ResultProps {
    boxes: Box[] | undefined,
    date: Date | undefined
}

const Result: React.FC<ResultProps> = ({ boxes, date }) => {
    const [modal, setModal] = useState<boolean>(true);
    const modalRef = useRef(null);

    useEffect(() => {
        gsap.set(modalRef.current, { y : 100, autoAlpha : 0 });
        gsap.to(modalRef.current, 0.35 , { y : 0, autoAlpha : 1, delay : 0.15 });
    }, []);

    const closeModal = () => {
        gsap.to(modalRef.current, 0.35 , { y : 100, autoAlpha : 0, delay : 0.15 })
            .then(() => setModal(false));
    }

    return (
        <ResultWrap>
            {
                boxes?.map(item => (
                    <BoxItem key={item.id} />
                ))
            }
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