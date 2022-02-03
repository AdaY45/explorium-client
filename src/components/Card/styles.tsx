import styled, { css } from 'styled-components';
import {StarFill, StarHalf} from '@styled-icons/bootstrap';

export const CardWrapper = styled.div`
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
  font-size: 20px;
  margin: 10px 0;
  font-weight: 500;
`;

export const Author = styled.div`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 10px;
`;

export const RateContainer = styled.div`
  font-size: 19px;
  display: flex;
`;

export const Rate = styled.div`
  font-size: 19px;
  align-items: center;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.84)
`;

export const Star = styled(StarFill)`
  width: 20px;
  height: 20px;
`;

export const HalfStar = styled(StarHalf)`
  width: 20px;
  height: 20px;
`;
