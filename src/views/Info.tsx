import {InfoWrap} from "../components/Info/InfoWrap";
import {HomeButton} from "../components/Home/HomeButton";
import {InfoText} from "../components/Info/InfoText";
const Info = () => {
    return (
        <InfoWrap>
            <InfoText>
                Welcome to my website. The purpose of it is to motivate you to
                work towards your goals. As the name suggests it will do it in
                a dark way. But before it, you'll need to answer few questions.
            </InfoText>
            <HomeButton>OK</HomeButton>
        </InfoWrap>
    );
}

export { Info };