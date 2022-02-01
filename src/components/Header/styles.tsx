import styled, { keyframes } from 'styled-components';
import { ShoppingCart } from '@styled-icons/material-outlined/ShoppingCart';
import { NavLink } from "react-router-dom";

const scaledropdown = keyframes`
  0% {
    transform: scale(0);
  }
  
  50% {
    transform: scale(1);
  }
  
  100% {
    transform: scale(1);
  }
`;


export const HeaderWrapper = styled.header`
  max-width: 1920px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  width: 1440px;
  padding: 25px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  width: 500px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  :nth-child(2) {
    justify-content: flex-end;
    align-items: center;
  }
`;


export const Logo = styled.div`
  outline: none;

  font-size: 1.8rem;
  font-weight: 600;
`;

export const Category = styled(NavLink)`
  margin: 0px 25px;
  padding: 9px 5px 0px;

  outline: none;

  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  color: #000000;
`;

export const ImageLogo = styled.img`
  width: 17px;
  height: 17px;
  padding: 0px 1px;
`;

export const LinkElem = styled(NavLink)`
  margin: 0px 15px;
  padding: 12px 0px;

  outline: none;

  text-decoration: none;
  color: #000000;


  :nth-child(3) {
    width: 130px;

    background-color: #000;
    border-radius: 17px;

    text-align: center;
    letter-spacing: 0.08rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: white;

  }
`;

export const DropDown = styled.div`
  position: absolute;
  
  width: 250px;
  
  padding: 10px 0px;
  top: 65px;
  left: 310px;
  
  display: flex;
  flex-direction: column;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background-color: white;
  
  animation-name: ${scaledropdown};
  animation-duration: 0.4s;
  animation-iteration-count: 1;
`;

export const RightSide = styled.div`
  position: absolute;

  width: 250px;

  padding: 10px 0px;
  top: 70px;
  left: 420px;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  background-color: white;

`;

export const Link = styled(NavLink)`
  padding: 10px 15px;
  
  text-decoration: none;
  font-size: 13px;
  color: black;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  :hover {
    color: #f6c396;
  }
  
  i {
    font-size: 9px;
  }
`;

export const ShopCart = styled(ShoppingCart)`
  padding: 5px 0px;
  margin: 0px 15px;
  
  width: 25px;
  height: 25px;

  color: #000;

  :hover {
    cursor: pointer;
    color: #3c3c3c;
  }
`