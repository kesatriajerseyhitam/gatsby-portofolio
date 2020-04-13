import React from 'react';
import {
  FaEnvelope,
  FaMapMarker,
  FaPhone,
} from 'react-icons/fa';

import TechLabel from '../../components/tech-label';
import Layout from '../../components/layout';
import ProfileImage from '../../images/profile.png';
import SEO from '../../components/seo';
import logo from '../../images/tama-icon.png';

import { footerLinks as links } from '../../constant/links';

import {
  AboutContainer,
  AboutDescription,
  AboutTitleContainer,
  AboutTitleLogo,
  Container,
  ContactContainer,
  Divider,
  IconContainer,
  ImageContainer,
  JobContainer,
  LinksListContainer,
  LinkContainer,
  TitleContainer,
} from './styled';

const techs = 'Javascript, Dart, Go, React, Gatsby, Next, Flutter, Vue, Angular,'
  + 'Node, Express, PostgreSQL, MySQL, Mongo, GraphQL';

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
        <IconContainer>
          <FaMapMarker />
        </IconContainer>
        Bandung, ID
        <IconContainer>
          <FaEnvelope />
        </IconContainer>
        mgf.prauliyatama@gmail.com
        <IconContainer>
          <FaPhone />
        </IconContainer>
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

      <AboutContainer>
        <AboutTitleLogo
          alt="Logo"
          src={logo}
        />
        <AboutTitleContainer>
          About Me
        </AboutTitleContainer>
        <Divider width="30%" />
        <AboutDescription>
          There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
          to repeat predefined chunks as necessary, making this the first true generator on the Internet.
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
          to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </AboutDescription>
        <div style={{
          display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', margin: '10px 0',
        }}
        >
          { techs.split(',').map((tech) => <TechLabel key={tech} technology={tech} />) }
        </div>
      </AboutContainer>
    </Container>
  </Layout>
);


export default IndexPage;
