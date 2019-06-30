import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { AppContext } from '../App';
import { useScrollToTop } from '../utils/Hooks';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Leafhacker from '../images/leafhacker.png';
import Brady from '../images/brady.png';
import Leijurv from '../images/leijurv.png';
import DonateBackground from '../images/donateBackground.png';

export default function Donate() {
  const { status } = useContext(AppContext);
  useScrollToTop(status);

  return (
    <React.Fragment>
      <Helmet>
        <title>Impact Development - Donate</title>
        <meta name="description" content="Support Impact Development by donating today." />
      </Helmet>
      <DonateWrapper>
        <DonateTextSection>
          <DonateTitle>Support Impact Development</DonateTitle>
          <Team>
            <Member>
              <img src={Leafhacker} alt="Leafhacker" />
              <p>Leafhacker</p>
              <h4>Developer</h4>
            </Member>
            <Member>
              <img src={Brady} alt="Brady" />
              <p>Brady</p>
              <h4>Developer</h4>
            </Member>
            <Member>
              <img src={Leijurv} alt="leijurv" />
              <p>leijurv</p>
              <h4>Developer</h4>
            </Member>
          </Team>
          <DonateDescription>
            If you donate <b>$5 or more</b> (and enter your Minecraft username), you will recieve a few small rewards such as <b>premium mods</b> (currently Ignite), a <b>cape</b> visible to other Impact users, a <b>gold colored name</b> in the <a target="_blank" rel="noopener noreferrer" href="https://discordapp.com/invite/uNTH3b?utm_source=Discord%20Widget&utm_medium=Connect">Impact Discord Server</a>, and <b>early access</b> to closed betas of upcoming releases.
            <br/>Before making a payment, ensure that your <b>Minecraft Username or UUID is specified</b> in the payment note and <b>Discord Username#XXXX</b> if you would like the roles in our server. Payments may take up to <b>72 hours</b> to process.
          </DonateDescription>
          <DonateButton
            href="https://www.paypal.me/BradyHahn"
            target="_blank"
            rel="noopener noreferrer"
            title="Donate"
            >
          </DonateButton>
        </DonateTextSection>
      </DonateWrapper>
      <Footer hide />
    </React.Fragment>
  );
};

const DonateWrapper = styled(Container)`
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: ${props => props.theme.colorText(1)};

  br {
    margin-bottom: 15px;
  }
`;

const DonateTextSection = styled.section`
  max-width: 1280px;
  padding: 60px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  flex-direction: column;
  position: relative;

  @media (max-width: ${props => props.theme.tablet}) {
    max-width: 100vw;
  }
`;

const DonateTitle = styled.h1`
  font-size: 46px;
  font-weight: 400;

  @media (max-width: ${props => props.theme.tablet}) {
    font-size: 36px;
  }

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 32px;
  }
`;

const Team = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 10px;
  padding: 60px 0px;
`;

const Member = styled.div`
  img {
    height: 150px;
  }

  p {
    font-size: 22px;
    line-height: 1.5;
    margin: 0;
  }

  p, h4 {
    text-align: center;
    margin: 0;
  }

  h4 {
    font-size: 18px;
    color: ${props => props.theme.colorBlue(1)}
  }
`;

const DonateDescription = styled.p`
  font-size: 22px;
  max-width: 640px;
  margin: 0;
  line-height: 1.5;
  color: ${props => props.theme.colorText(0.8)};

  a {
    color: ${props => props.theme.colorBlue(1)};
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.colorBlue(0.6)};
  }

  @media (max-width: ${props => props.theme.mobile}) {
    font-size: 18px;
  }
`;

const DonateButton = styled.a`
  width: 300px;
  height: 105px;
  margin-top: 30px;
  background-image: url(${DonateBackground});
  background-size: cover;
`;
