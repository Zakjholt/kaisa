import React from 'react';
import ComplimentLogo from '../../components/complimentLogo';
import RoseLogo from '../../components/roseLogo';
import {
  Container,
  ComplimentLogoContainer,
  EmailLink,
  PrimaryBlurb,
  SecondaryBlurb,
  RoseLogoLink
} from './styled';

export default () => (
  <Container>
    <ComplimentLogoContainer>
      <ComplimentLogo />
    </ComplimentLogoContainer>
    <PrimaryBlurb>
      We bring together people who are really good at what they do to help you
      design, build, and ship.{' '}
      <EmailLink href="mailto:office@compl.co">office@compl.co</EmailLink>
    </PrimaryBlurb>
    <SecondaryBlurb>
      Our clients include Buzzfeed, Airbnb, Facebook, Starbucks, Clearbit, Zeus
      Living, Dropbox, Readme, GE, McDonald’s, Anheuser Busch, Tasty, Calm, Brit
      + Co, Lego, Shogun, Jumpcut, 3M, Agrilyst.
    </SecondaryBlurb>
    <RoseLogoLink target="_blank" href="https://www.instagram.com/complco/">
      <RoseLogo />
    </RoseLogoLink>
  </Container>
);
