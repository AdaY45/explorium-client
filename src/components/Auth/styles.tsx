import styled, { keyframes, css } from 'styled-components';
import { Form, Field } from 'formik';

const loadfrom = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  
  50% {
    opacity: 1;
    transform: scale(1);
  }
  
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AuthWrapper = styled.div`
  margin: 180px 0px;
  
  animation-name: ${loadfrom};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

export const Headline = styled.div`
  margin: 30px 0 10px;

  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: rgba(26, 26, 26, 0.8);
  text-transform: uppercase;
`;

export const Error = styled.div`
  padding: 20px 10px 5px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 0, 0, 0.7);
`;

export const Button = styled.button<{ place?: string }>`
  width: 200px;
  padding: 16px 5px;
  margin: 20px 0px;

  letter-spacing: 0.09rem;
  font-family: 'Commissioner', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #000;
  
  outline: none;
  border: none;
  background-color: #ADFF33;
  box-shadow: 0px 0px 5px 0px #ADFF33;
  border-radius: 17px;
  transition: all 0.5s;

  ${props => props.place === 'card' && css`
      margin-left: auto;
      margin-right: auto;
  `};

  :hover {
    transition: all 0.5s;
    cursor: pointer;
    color: white;
    background-color: #000;
    box-shadow: 0px 0px 5px 0px #000;
  }
`;

export const Label = styled.label`
  padding: 20px 10px 5px;

  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(26, 26, 26, 0.8);
`;

export const Input = styled(Field)`
  width: 380px;
  padding: 15px 10px;
  
  border: none;
  outline: none;
  background: #e2e2dd;
  border-radius: 15px;

  color: rgba(26, 26, 26, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'Commissioner', sans-serif;

  :focus {
    outline: 2px solid #ADFF33;

    ::placeholder {
      transition: .5s all;
      opacity: 0;
      transform: translateX(15px);
    }
  }

  ::placeholder {
    transition: .5s all;

    font-size: 0.80rem;
    font-family: 'Commissioner', sans-serif;
    font-weight: 600;
    color: rgba(26, 26, 26, 0.5);
  }
`;

export const LabelErrorWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
