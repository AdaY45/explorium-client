import About from "./components/About";
import { MainContainer, MainWrapper } from "./styles";

const Main = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <About />
            </MainContainer>
        </MainWrapper>
    );
}

export default Main;