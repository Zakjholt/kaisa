import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 25vh;
  flex-direction: column;
`;

export const ComplimentLogoContainer = styled.div`
  width: calc(178px * 0.85);

  svg {
    width: 100%;
    height: auto;
  }
`;

export const PrimaryBlurb = styled.p`
  font-size: calc(44px * 0.6);
  font-weight: bold;
  max-width: 540px;
  text-align: center;
  line-height: 1.59;
`;

export const EmailLink = styled.a`
  color: #49ca8b;
  text-decoration: none;
  position: relative;
  display: inline-block;
`;

export const SecondaryBlurb = styled.p`
  font-size: calc(18px * 0.7);
  color: #b1b6b7;
  text-align: center;
  line-height: 2.11;
`;

export const RoseLogoLink = styled.a`
  display: block;
`;
