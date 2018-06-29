import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInUpAnimation = keyframes`
  ${fadeIn};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  margin: 13px 85px;
  flex 1;
  animation: 1s ${fadeInUpAnimation};
`;

export const Image = styled.img`
  flex: 0 1;
  height: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LinksContainer = styled.div``;

export const Link = styled.a`
  color: #d7bea5;
  font-family: 'Basic Grotesque';
  font-size: 14px;
  font-style: normal;
  font-stretch: normal;
  font-weight: bold;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 2.65px;
  text-transform: uppercase;

  margin: 0 18px;

  &:first-child {
    margin-left: 0;
  }
`;

export const Name = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-family: 'Meek Display';
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  text-align: left;
  line-height: 64px;
`;

export const BlurbTitle = styled.h1`
  margin-top: 153px;
  color: #ffffff;
  font-family: 'Meek Display';
  font-size: 70px;
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
`;

export const Blurb = styled.p`
  margin-top: 37px;
  color: #ffffff;
  font-family: 'Basic Grotesque';
  font-size: 19px;
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  line-height: 35px;
`;
