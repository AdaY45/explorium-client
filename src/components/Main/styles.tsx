import styled, { keyframes } from "styled-components";
import { Email, PhoneIphone, Info } from '@styled-icons/material-outlined';
import { NavLink } from "react-router-dom";

const fadeOut = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const MainWrapper = styled.main`
    max-width: 1920px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainContainer = styled.div`
    width: 1440px;

    margin: 120px 0px 0px;

`;

/* About component */

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const ContainerTitle = styled.p`
    width: 615px;

    margin: 0;

    font-weight: 400;
    font-size: 2.7rem;
    text-align: center;
    color: #000;
`;

export const ContainerTimso = styled.div`
    padding: 35px 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ContainerSwitch = styled.label`
    position: relative;
    display: inline-block;
    width: 110px;
    height: 45px;
`;

export const SwitchTitle = styled.p`
    width: 130px;
    height: 20px;
    font-size: 1.1rem;
    text-align: center;
    color: #000;
`;

export const SwitchSpan = styled.span`
    position: absolute;
    cursor: pointer;
          
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    
    border-radius: 30px;
          
    -webkit-transition: .3s;
    transition: .3s;

    ::before {
        position: absolute;
        content: "";
          
        height: 35px;
        width: 35px;
        left: 5px;
        bottom: 5px;
                
        border-radius: 50%;
        background-color: white;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);

        -webkit-transition: .3s;
        transition: .3s;
    }
`;

export const SwitchButton = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${SwitchSpan} {
        background-color: #ADFF33;
    }

    :checked + ${SwitchSpan}::before {
        -webkit-transform: translateX(65px);
        -ms-transform: translateX(65px);
        transform: translateX(65px);
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const Image = styled.img`
    :nth-child(2) {
        top: 10px;
        position: absolute;
    }
`;

export const ContainerSubtitle = styled.div`
    width: 1140px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LeftsideContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
`;

export const LeftsideText = styled.p`
    
    :nth-child(1) {
        width: 455px;
        font-weight: 500;
        font-size: 2.3rem;
        color: #000;
    }

    :nth-child(2) {
        margin: 30px 0px;
        width: 385px;
        letter-spacing: 0.03rem;
        font-weight: 400;
        font-size: 0.8rem;
        color: #000;
    }

    :nth-child(3) {
        width: 265px;
        font-weight: 400;
        font-size: 0.95rem;
        color: #7A7A7A;
    }
`;

export const RightsideContainer = styled.div`
    width: 550px;
`;

export const RightsideImage = styled.img`

`;


/* Register advertise */

export const ContainerSignup = styled.div`
    width: 1540px;
    margin: 160px 0px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

export const ContainerContacts = styled.div`
    width: 580px;
    height: 350px;
    
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

`;

export const ContainerMenu = styled.div`
    width: 250px;
    height: 190px;
    padding: 0px 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    background-color: rgb(244, 244, 243);
`;

export const CommunicationForm = styled.div`
    width: 300px;
    height: 300px;

    top: 30px;
    left: 230px;
    bottom: 10px;
    position: absolute;
    z-index: 100;
    
    
    border-radius: 30px;
    background-color: white;

    animation-name: ${fadeOut};
    animation-duration: 0.3s;
    animation-iteration-count: 1;
`;

export const EmailIcon = styled(Email)`
    width: 25px;
    height: 25px;
    padding: 0px 10px 0px;

    color: rgb(148, 214, 49);
`;

export const PhoneIcon = styled(PhoneIphone)`
    width: 25px;
    height: 25px;

    padding: 0px 10px 0px;
    
    color: rgb(148, 214, 49);
`;

export const InfoIcon = styled(Info)`
    width: 25px;    
    height: 25px;

    padding: 0px 10px 0px;

    color: rgb(148, 214, 49);
`;

export const MenuText = styled.p`
    width: 100%;

    margin: 0;
    padding: 18px;

    outline: none;

    color: rgb(163, 163, 163);
    letter-spacing: 0.03rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-align: left;

    transition: all 0.4s;

    :hover {
        cursor: pointer;

        transition: all 0.3s;

        border-radius: 20px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.03);

        transform: scale(1.12);

        color: rgba(0, 0, 0, 0.7);
    }

    :nth-child(1) {
        transition: all 0.3s;

        border-radius: 20px;
        background-color: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.03);

        transform: scale(1.12);

        color: rgba(0, 0, 0, 0.7);
    }
`;

export const ContainerSignupForm = styled.div`
    width: 650px;
    height: 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const SignupFormText = styled.p`
    :nth-child(1) {
        width: 360px;
        margin: 0;
        padding: 10px 0px 15px;

        font-weight: 500;
        font-size: 2.1rem;
        color: #000;
    }

    :nth-child(2) {
        width: 320px;
        margin: 0;
        padding: 3px 0px 25px;

        font-weight: 500;
        font-size: 1rem;
        color: #000;
    }

    :nth-child(3) {
        width: 395px;
        margin: 0;

        line-height: 25px;
        font-weight: 500;
        font-size: 0.7rem;
        color: #000;
    }
`;

export const SignupButton = styled(NavLink)`
    margin: 12px 0px;
    padding: 13px 65px;

    outline: none;

    text-decoration: none;
    color: #000;


    background-color: #000;
    border-radius: 17px;

    text-align: center;
    letter-spacing: 0.08rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
`;