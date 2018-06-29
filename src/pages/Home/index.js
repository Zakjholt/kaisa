import React from 'react';
import {
  Container,
  Content,
  Name,
  Image,
  LinksContainer,
  Link,
  BlurbTitle,
  Blurb
} from './styled';
import Hero from '../../images/hero.png'

export default () => (
  <Container>
    <Content>
      <Name>Kasia Muszynski</Name>
      <LinksContainer>
        <Link href="/">Resume</Link>
        <Link href="/">Email</Link>
        <Link href="/">Instagram</Link>
      </LinksContainer>
      <BlurbTitle>Hello.</BlurbTitle>
      <Blurb>A passionate, aspiring chef with a degree in Web Design and New Media. I’ve travelled the world experiencing culture and hospitality through food, and was raised to appreciate it from a young age.</Blurb>
    </Content>
    <Image src={Hero} alt="Kasia" />
  </Container>
);
