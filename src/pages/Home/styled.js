import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeInUpAnimation = keyframes`
  ${fadeInUp};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  margin-left: 85px;
  margin-top: 27px;
  flex 1;
  animation: 1s ${fadeInUpAnimation};
`

export const Image = styled.img`
  flex: 0 1;
  height: 100vh;
`

export const LinksContainer = styled.div`
`

export const Link = styled.a`
  color: #d7bea5;
  font-family: 'Basic Grotesque';
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  font-weight: bold;
  text-align: left;
`

export const Name = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Meek Display';
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  text-align: left;
  line-height: 64;
`