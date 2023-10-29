import {ResultWrap} from "../components/Result/ResultWrap";
import {ResultModal,ResultBar, ResultInfo} from "../components/Result/ResultModal";
import {ResultButton, ResultText} from "../components/Result/ResultModal";
const Result = () => {
    return (
        <ResultWrap>
            <ResultModal>
                <ResultBar>
                    <ResultButton>X</ResultButton>
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
        </ResultWrap>
    )
}

export default Result;