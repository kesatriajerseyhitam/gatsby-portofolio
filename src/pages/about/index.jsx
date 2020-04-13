import React from 'react';
import {
  FaEnvelope,
  FaMapMarker,
  FaPhone,
} from 'react-icons/fa';

import Layout from '../../components/layout';
import ProfileImage from '../../images/profile.png';
import SEO from '../../components/seo';

import { footerLinks as links } from '../../constant/links';

import {
  Container,
  ContactContainer,
  ImageContainer,
  JobContainer,
  LinksListContainer,
  LinkContainer,
  TitleContainer,
} from './styled';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <Container>
      <ImageContainer
        alt="profile"
        src={ProfileImage}
      />
      <TitleContainer>
        Raka Pratama
      </TitleContainer>
      <JobContainer>
        Software Engineer
      </JobContainer>
      <ContactContainer>
        <FaMapMarker style={{ margin: '0 .8rem' }} />
        Bandung, ID |
        <FaEnvelope style={{ margin: '0 .8rem' }} />
        mgf.prauliyatama@gmail.com |
        <FaPhone style={{ margin: '0 .8rem' }} />
        +628-595-137-2394
      </ContactContainer>
      <LinksListContainer>
        {
          links.map((item) => (
            <LinkContainer key={item.path} href={item.path} target="_blank">
              { item.icon }
            </LinkContainer>
          ))
        }
      </LinksListContainer>
    </Container>
  </Layout>
);

export default IndexPage;
