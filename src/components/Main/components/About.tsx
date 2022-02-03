import { Container, ContainerSwitch, ContainerTitle, SwitchButton, SwitchTitle, SwitchSpan, ContainerTimso, ContainerImage, Image, ContainerSubtitle, LeftsideContainer, LeftsideText, RightsideContainer, RightsideImage } from "../styles";

const About = () => {
    return (
        <Container>
            <ContainerTitle>hybrid and remote teams became easy to manage now</ContainerTitle>
            <ContainerTimso>
                <SwitchTitle>turn on timso</SwitchTitle>
                <ContainerSwitch>
                    <SwitchButton type="checkbox" name="team-check" id="team-check" checked />
                    <SwitchSpan></SwitchSpan>
                </ContainerSwitch>
            </ContainerTimso>
            <ContainerImage>
                <Image src={require('../../../assets/images/upper-image.png')} />
                <Image src={require('../../../assets/images/lower-image.png')} />
            </ContainerImage>
            <ContainerSubtitle>
                <LeftsideContainer>
                    <LeftsideText>simple coordination for remote teams and flex offices</LeftsideText>
                    <LeftsideText>easy to find and mark who works from the office, who is remote from home or is not available at all</LeftsideText>
                    <LeftsideText>integrate timso with your corporate chats to show statuses there</LeftsideText>
                </LeftsideContainer>
                <RightsideContainer>
                    <RightsideImage src={require('../../../assets/images/image.png')} />
                </RightsideContainer>
            </ContainerSubtitle>
        </Container>
    )
}

export default About;