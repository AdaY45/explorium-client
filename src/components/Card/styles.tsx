import styled, { css } from 'styled-components';
import {StarFill, StarHalf} from '@styled-icons/bootstrap';

export const CardWrapper = styled.div`
  width: 350px;
  height: 495px;
  
  margin: 10px;
  background: #fff;
  border-radius: 25px;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const Image = styled.div<{src: string}>`
  width: 100%;
  height: 200px;
  ${props => props.src &&
    css `
      border-radius: 25px 25px 0 0;
      background-image: url(${props.src});
      background-size: cover;
      background-repeat: no-repeat;
    `};
`;

export const Name = styled.div`
  padding: 0px 3px;

  font-size: 1.1rem;
  margin: 10px 0;
  font-weight: 500;
`;

export const Author = styled.div`
  padding: 0px 3px;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
`;

export const RateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Rate = styled.div`
  :nth-child(1) {
    padding: 0px 3px;
    font-size: 1.1rem;
    font-weight: 500;
    color: rgb(197, 105, 14);
  }

  :nth-child(2) {
    color: rgb(229, 152, 25);
    height: 23px;
    font-size: 1rem;
  }
`;

export const Price = styled.div`
  padding: 0px 3px;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.84)
`;

export const Star = styled(StarFill)`
  width: 18px;
  height: 18px;
  padding: 0px 1px;
`;

export const HalfStar = styled(StarHalf)`
  width: 18px;
  height: 18px;
  padding: 0px 1px;
`;
