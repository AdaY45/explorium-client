import styled, { keyframes } from 'styled-components';
import { Form, Field} from 'formik';

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
  margin: auto;
  padding: 8px 0px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 0, 0, 0.7);
`;

export const Button = styled.button`
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
  border-radius: 17px;

  :hover {
    cursor: pointer;
    color: white;
    background-color: #000;
  }
`;

export const Label = styled.label`
  padding: 20px 10px 5px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(26, 26, 26, 0.8);

`;

export const Input = styled(Field)`
  width: 400px;
  padding: 10px 10px;
  
  font-size: 12px;
  color: rgba(26, 26, 26, 0.7);
  
  outline: none;
  border: none;
  background: #EEEEEA;
  border-bottom: 2px solid #000;
  transition: 1s all;

  :focus {
    border-bottom: 2px solid #ADFF33;
  }

  ::placeholder {
    font-size: 11px;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    color: rgba(26, 26, 26, 0.5);
  }
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
