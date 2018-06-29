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
        <Link target="_blank" href="/resume.pdf">Resume</Link>
        <Link href="mailto:muszynskic@gmail.com">Email</Link>
        <Link target="_blank" href="https://www.instagram.com/kasiamuszynski">Instagram</Link>
      </LinksContainer>
      <BlurbTitle>Hello.</BlurbTitle>
      <Blurb>
      Kasia Muszynski is a thoughtful Polish designer who has turned her passion and attention to detail towards food. She is currently completing the Professional Culinary Arts program at the International Culinary Center in New York.
      </Blurb>
    </Content>
    <Image src={Hero} alt="Kasia" />
  </Container>
);
