import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInUpAnimation = keyframes`
  ${fadeIn};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  margin: 13px 5%;
  flex: 1;
  animation: 1s ${fadeInUpAnimation};
`;

export const Image = styled.img`
  flex: 0 1;
  height: 500px;
  object-fit: cover;
  margin-top: 40px;

  @media (min-width: 1000px) {
    height: 100vh;
    width: 50%;
    margin: 0;
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

  & + & {
      margin-left: 20px;

      @media (min-width: 500px) {
          margin-left: 30px;
      }
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
  color: #ffffff;
  font-family: 'Meek Display';
  font-size: 70px;
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  margin: 60px 0 0;

  @media (min-width: 1000px) {
    margin-top: 153px;
  }
`;

export const Blurb = styled.p`
  color: #ffffff;
  font-family: 'Basic Grotesque';
  font-size: 19px;
  font-style: normal;
  font-stretch: normal;
  font-weight: 500;
  line-height: 35px;
  max-width: 550px;

  @media (min-width: 1000px) {
    margin-top: 37px;
  }
`;
