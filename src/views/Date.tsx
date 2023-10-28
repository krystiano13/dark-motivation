import {DateWrapper} from "../components/Date/DateWrapper";
import {InfoText} from "../components/Info/InfoText";
import {DateInput} from "../components/Date/DateInput";
const Date = () => {
    return (
        <DateWrapper>
            <InfoText>Now. Choose your date of birth...</InfoText>
            <DateInput type='date' />
        </DateWrapper>
    )
}

export default Date;