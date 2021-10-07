import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";

import { ContentBlockProps } from "../../components/ContentBlock/types";
import { Fade, Slide } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "../../components/ContentBlock/RightContentBlock/styles";
import SolanaButton from "../../components/SolanaButton";

import { useMemo } from "react";
import { Component} from 'react';
//UI Imports

import icon from '../../images/2790.png'
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import Countdown from 'react-countdown';

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { MiddleBlockSection } from "../../components/MiddleBlock/styles";


const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const ThreeColumns = lazy(() => import("../../components/ThreeColumns"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));



const Home = () => {


  return (
  <main>
    
    <Container>
      

      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      /> */}

    <MiddleBlockSection>
      
        <Row justify="center" align="middle">
          <ContentWrapper>
        
          
            <Col lg={24} md={24} sm={24} xs={24}>
            <Fade delay={0} direction="up">
              <h1>Explore the vast multiverses of Abstracterra</h1>
              </Fade>
              <Fade delay={300} direction="up">
              <Content>Take the chance of being one of the few people who travel into the Abstracterra portal to different kind of worlds</Content>
              </Fade>
              
                <Row className="margin-bottom" justify="space-between" align="middle">
                  <Col lg={9} md={9} sm={24} xs={24}>
                  <Fade delay={500} direction="up">
                    <div className="card-hero-left">
                      <div> <p>Price</p></div>
                      <div> <h5>2 Sol</h5></div>
                    </div>
                  </Fade>
                  </Col>
                  <Col lg={13} md={13} sm={24} xs={24}>
                  <Fade delay={700} direction="up">
                    <div className="card-hero-right">
                      <div><p>Minting starts</p></div>
                      <div><h6>Soon</h6>,
                      </div>
                    </div>
                    </Fade>
                  </Col>
                </Row>
              

              <Fade direction="up">
                <main>
                  <section className="cards">
                    <div className="card charizard animated"></div>
                  </section>
                </main>
                </Fade>
            
            </Col>
            
                
        
          </ContentWrapper>
        </Row>
       

    </MiddleBlockSection>


      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="main.gif"
        id="about"
      />
     
    </Container>

    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}


export default Home;
