import styled, { keyframes } from 'styled-components';
import { Search } from '@styled-icons/material-outlined/Search';

const hideBar = keyframes`
  0% {
    width: 0px;
    opacity: 0;
  }

  100% {
    width: 250px;
    opacity: 1;
  }
`;

export const SearchBar = styled.input`
  width: 250px;
  padding: 10px 15px;

  outline: none;
  border: none;
  background-color: #EEEEEA;
  border-bottom: 2px solid #ADFF33;
  box-sizing: border-box;

  color: #000;

  animation-name: ${hideBar};
  animation-duration: 1.1s;
  animation-iteration-count: 1;

  &:focus::placeholder {
    transition: 0.5s all;
    opacity: 0;
    transform: translateX(20px);
  }
`;

export const SearchIcon = styled(Search)`
  padding: 5px 0px;
  margin: 0px 15px;
  
  width: 25px;
  height: 25px;

  color: #000;

  :hover {
    cursor: pointer;
    color: #3c3c3c;
  }
`;