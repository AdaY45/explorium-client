import About from "./components/About";
import SignupAdvertise from "./components/SignupAdv";
import { MainContainer, MainWrapper } from "./styles";
import Slider from "../Slider/Slider";

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <About />
                <SignupAdvertise />
                <Slider />
            </MainContainer>
        </MainWrapper>
    );
}

export default Main;
