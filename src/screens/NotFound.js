import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { LinkButton } from '../components/Button';
import { useScrollToTop } from '../utils/Hooks';
import { AppContext } from '../App';
import NotFoundWallpaper from '../images/notFound.jpg';

export default function NotFound() {
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  return (
    <React.Fragment>
      <Helmet>
        <title>404 Not Found</title>
        <meta name="description" content="This page doesn't exist" />
      </Helmet>
      <NotFoundWrapper>
        <NotFoundContent>
          <NotFoundBackground>404</NotFoundBackground>
          <NotFoundTitle>You've Reached a Dead End</NotFoundTitle>
          <NotFoundDescription>This page couldn't be found. It probably doesn't exist, or it may have moved</NotFoundDescription>
          <LinkButton secondary to="/" text="Back to homepage" />
        </NotFoundContent>

        <NotFoundVideoWrapper aria-hidden>
          <NotFoundImage src={NotFoundWallpaper} image alt="404 not found" />
        </NotFoundVideoWrapper>
        <NotFoundFooter />
      </NotFoundWrapper>
    </React.Fragment>
  );
}

const NotFoundWrapper = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const NotFoundContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  text-align: center;
  padding: 0 20px;
  overflow: hidden;
`;

const NotFoundTitle = styled.h1`
  font-size: 64px;
  line-height: 1;
  color: white;
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 36px;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 22px;
  color: white;
  margin: 0;
  max-width: 500px;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 30px;

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 18px;
  }
`;

const NotFoundBackground = styled.div`
  font-size: 380px;
  font-weight: 800;
  position: absolute;
  z-index: -1;
  color: ${props => props.theme.colorBlack(0.15)};

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 220px;
  }
`;

const NotFoundVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  max-height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.colorBlue(0.8)};
    z-index: 1;
  }
`;

const NotFoundVideo = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;

  @media (max-width: ${props => props.theme.mobile}) {
    object-position: left;
  }
`;

const NotFoundImage = NotFoundVideo.withComponent('img');

const NotFoundFooter = styled(Footer)`
  background: transparent;
`;
