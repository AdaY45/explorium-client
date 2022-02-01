import styled from "styled-components";

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
    width: 1440px;

    margin: 220px 0px;

`;