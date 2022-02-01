import styled, {keyframes} from 'styled-components';
import { NavLink } from "react-router-dom";

export const FooterWrapper = styled.footer`
  max-width: 1920px;
  background-color: rgba(12, 18, 12, 1);
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterContent = styled.div`
  width: 350px;
  padding: 45px 40px;
  
  display: grid;
  grid-template-columns: repeat(2, 0.6fr);
`;

export const Link = styled(NavLink)`
  padding: 3px 0px;
  color: white;
  font-size: 14px;
  text-decoration: none;
  
  :hover {
    color: #f6c396;
  }
`;

export const Logo = styled.div`
  padding-right: 50px;
  font-size: 30px;
  font-weight: 600;
  color: white;
  outline: none;
  
  :hover {
    color: #f6c396;
  }
`;
