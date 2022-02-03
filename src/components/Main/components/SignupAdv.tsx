import { useState } from "react";
import { ContainerContacts, ContainerSignup, ContainerSignupForm, ContainerMenu, MenuText, EmailIcon, PhoneIcon, InfoIcon, CommunicationForm, SignupFormText, SignupButton } from "../styles";

const SignupAdvertise = () => {
    const [isFocus, setFocus] = useState(false);

    console.log(isFocus)

    return(
        <ContainerSignup>
                <ContainerContacts>
                    <ContainerMenu>
                        <MenuText tabIndex={0}><InfoIcon></InfoIcon> информация</MenuText>
                        <MenuText tabIndex={0}><PhoneIcon></PhoneIcon> связь с менеджером</MenuText>
                        <MenuText tabIndex={0}><EmailIcon></EmailIcon> связь по почте</MenuText>
                        <CommunicationForm></CommunicationForm>
                    </ContainerMenu>
                </ContainerContacts>
                <ContainerSignupForm>
                    <SignupFormText>create your own custom statuses to optimise routine</SignupFormText>
                    <SignupFormText>every team has individual processes</SignupFormText>
                    <SignupFormText>in addition to standard statuses, you can set up your own statuses with customised rules</SignupFormText>
                    <SignupButton to="/register">sign up</SignupButton>
                </ContainerSignupForm>
        </ContainerSignup>
    );
}

export default SignupAdvertise;