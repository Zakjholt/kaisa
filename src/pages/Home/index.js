import React from 'react';
import {
  Container,
  Content,
  Name,
  Image,
  LinksContainer,
  Link
} from './styled';
import Hero from '../../images/hero.png'

export default () => (
  <Container>
    <Content>
      <Name>Kasia Muszynski</Name>
      <LinksContainer>
        <Link>Resume</Link>
        <Link>Email</Link>
        <Link>Instagram</Link>
      </LinksContainer>
    </Content>
    <Image src={Hero} alt="Kasia" />
  </Container>
);
