import React from 'react';
import ComplimentLogo from '../../components/complimentLogo';
import RoseLogo from '../../components/roseLogo';
import * as parts from './styled';

export default () => (
  <parts.Container>
    <parts.ComplimentLogoContainer>
      <ComplimentLogo />
    </parts.ComplimentLogoContainer>
    <parts.PrimaryBlurb>
      We bring together people who are really good at what they do to help you
      design, build, and ship.{' '}
      <parts.EmailLink href="mailto:office@compl.co">
        office@compl.co
      </parts.EmailLink>
    </parts.PrimaryBlurb>
    <parts.SecondaryBlurb>
      Our clients include Buzzfeed, Airbnb, Facebook, Starbucks, Clearbit, Zeus
      Living, Dropbox, Readme, GE, McDonald’s, Anheuser Busch, Tasty, Calm, Brit
      + Co, Lego, Shogun, Jumpcut, 3M, Agrilyst.
    </parts.SecondaryBlurb>
    <parts.RoseLogoLink
      target="_blank"
      href="https://www.instagram.com/complco/"
    >
      <RoseLogo />
    </parts.RoseLogoLink>
  </parts.Container>
);
