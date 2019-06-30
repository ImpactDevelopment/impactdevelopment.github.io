import React, { useState } from 'react';
import styled from 'styled-components/macro';

const HomePreview = ({ frame, mp4, webm, label, placeholder, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);

  return (
    <Wrapper {...rest}>
      <Render>
        <Video
          autoPlay
          muted
          loop
          playsInline
          aria-label={label}
          onPlay={() => setLoaded(true)}
        >
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
        </Video>
        <Placeholder
          instant
          src={frame}
          loaded={loaded}
          onLoad={() => setPosterLoaded(true)}
        />
        <Placeholder
          src={placeholder}
          loaded={posterLoaded || loaded}
        />
      </Render>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: auto;
  padding: 0;
  position: relative;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: visible;
  padding-top: 40px;
  padding-bottom: 80px;

  @media (max-width: ${props => props.theme.tablet}) {
    padding: 0;
    justify-content: center;
  }
`;

const Render = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  border-radius: 54px;
  max-width: 480px;
  width: 100%;
  height: auto;

  @media (max-width: ${props => props.theme.desktop}) {
    max-width: 364px;
    border-radius: 46px;
  }
`;

const Video = styled.video`
  grid-column: 1;
  grid-row: 1;
  object-fit: cover;
  width: 426px;
  height: 240px;

  @media (min-width: ${props => props.theme.desktop}) {
    width: 568px;
    height: 320px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    width: 100%;
    height: auto;
  }
`;

const Placeholder = styled.img.attrs({
  alt: '',
  role: 'presentation',
})`
  opacity: ${props => props.loaded ? 0 : 1};
  transition: opacity ${props => props.instant ? 0 : 0.4}s ease;
  border-radius: 4px;
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export default HomePreview;
