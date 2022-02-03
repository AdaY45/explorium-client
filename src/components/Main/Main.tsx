import About from "./components/About";
import SignupAdvertise from "./components/SignupAdv";
import { MainContainer, MainWrapper } from "./styles";

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <About />
                <SignupAdvertise />
            </MainContainer>
        </MainWrapper>
    );
}

export default Main;