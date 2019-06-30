import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Icon from '../utils/Icon';

const Footer = props => (
  <FooterWrapper className={props.className}>
    <FooterRow>
      <SocialIconRow>
        <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/uNTH3b?utm_source=Discord%20Widget&utm_medium=Connect"><Icon icon="discord" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ImpactDevelopment/ImpactClient/issues"><Icon icon="github" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCKNtEpIxdgpdhglhVob3NfA"><Icon icon="youtube" /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ImpactClient"><Icon icon="twitter" /></a>
      </SocialIconRow>
      {!props.hide &&
        <FooterLink to="/donate">Donate</FooterLink>
      }
      <FooterAnchor faded target="_blank" rel="noopener noreferrer" href="https://codyb.co">
        {`© ${new Date().getFullYear()} Cody Bennett`}
      </FooterAnchor>
    </FooterRow>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1 0 auto;
  position: relative;
  align-items: flex-end;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: flex-end;
  }
`;

const FooterLink = styled(Link)`
  margin: 15px;
  display: block;
  font-size: 16px;
  transition: all 0.3s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
  color: ${props => props.faded
    ? props.theme.colorText(0.5)
    : props.theme.colorText(0.8)};

  &:hover {
    text-decoration-color: ${props => props.faded
    ? props.theme.colorText(0.4)
    : props.theme.colorText(0.6)};
  }
`;

const FooterAnchor = FooterLink.withComponent('a');

const SocialIconRow = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;
  grid-template-columns: 36px 36px 36px 36px;
`;

export default Footer;
