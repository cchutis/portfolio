import React from 'react'
import PageRevealer from '../components/page-revealer'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'
import splash from '../../content/images/portfolio-items/CryptoChambr/splash.png'
import login from '../../content/images/portfolio-items/CryptoChambr/login.png'
import bitcoin from '../../content/images/portfolio-items/CryptoChambr/bitcoin.png'
import eos from '../../content/images/portfolio-items/CryptoChambr/eos.png'
import qtum from '../../content/images/portfolio-items/CryptoChambr/qtum.png'
import history from '../../content/images/portfolio-items/CryptoChambr/history.png'
import buy from '../../content/images/portfolio-items/CryptoChambr/buy.png'
import sell from '../../content/images/portfolio-items/CryptoChambr/sell.png'

export default class CryptoChambrPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        height: 0,
        width: 0,
        animation : false,
        complete: false,
        hide: false,
        pageTitle: "CryptoChambr"
    }
    this.reveal = this.reveal.bind(this)
  }

  reveal() {
    if (!this.state.complete) {
        this.setState({animation: true, complete: true})
        // setTimeout(() => { 
        //     // document.getElementById("reveal_container").style.backgroundColor = "transparent"
        //     setTimeout(() => { 
        //         this.setState({animation: false, hide: true})
        //     }, 500);
        // }, 400);
    }
}

  updateDimensions = () => {
      if (this.state.height !== window.innerHeight) {
          this.setState({height: window.innerHeight})
      }
  }


  componentDidMount() {
      this.setState({height: window.innerHeight})
      window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions)
  }


  render() {

    const Heading1 = styled.h1`
              font-size: 80px;
              font-family: Teko;
              line-height: 40px;
              color: #fff;
              font-weight: 400;
              text-transform: uppercase;
              text-align: center;
              @media (min-width:768px) {
                  margin-left: 4px;
              }
              @media (max-width:767px) {
                  margin-left: 2px;
              }
              @media (min-width:768px) and (max-width:1500px) {
                  font-size: 40px;
              }
              @media (max-width:767px) {
                  font-size: 20px;
                  line-height: 20px;
              }
          `

          const Main = styled.div`
              width: 100%;
              display: flex;
              align-items: flex-start;
              background-color: #000;
          `

          const Heading2 = styled.h2`
              font-size: 120px;
              color: #fff;
              font-weight: 700;
              text-transform: uppercase;
              text-align: center;
              background: -webkit-linear-gradient(left, #00ffff , #007a7a);
              background: -o-linear-gradient(right, #00ffff, #007a7a);
              background: -moz-linear-gradient(right, #00ffff, #007a7a);
              background: linear-gradient(to right, #00ffff , #007a7a); 
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
              @media (max-width:767px) {
                  font-size: 40px;
                  line-height: 40px;
              }
            @media (min-width:768px) and (max-width:1500px) {
                  font-size: 70px;
              }
          `

          const Content = styled.div`
                    position: relative;
                    z-index: 10;
                    margin-top: 100px;
                    color: white;
                `

          const TopSection = styled.div`
                display: flex;
                flex-direction: row;
                align-items: center;
                `

          const InfoBox = styled.div`
                    width: 30%;
                    background-color: #5b7f86;
                    padding: 20px;
                    overflow: hidden;
                    min-height: 275px;
                    border-radius: 10px;
                `

          const Bold = styled.b`
                color: #00ffff;
                `

          const Button = styled.button`
                font-weight: 700;
                    color: white;
                    background-color: #00ffff;
                    border: 0;
                    padding: 10px 40px;
                    border-radius: 6px;
                    font-size: 20px;
                    width: 100%;
                `

          const Image = styled.img`
                    width: 100%;
                `

          const Footer = styled.div`
                    margin-bottom: 100px;
                `

  return(
    <div>
      <Helmet>
        <title>CryptoChambr</title>
        <meta name="description" content="CryptoChambr Ruby on Rails App" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <PageRevealer pageTitle={this.state.pageTitle} />
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Ruby on Rails App"
                        revealDuration={700}
                        revealDelay={4000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="CryptoChambr"
                        revealDuration={500}
                        revealDelay={3000}
                        parentMethod={this.reveal}
                    />
           </Heading2>
            <TopSection>
              <InfoBox>
                <p><Bold>Project:</Bold> Cryptochambr</p>
                <p><Bold>Type:</Bold> Ruby on Rails</p>
                <p><Bold>Tools:</Bold> Ruby, Ruby on Rails, CoinMarketCap API, Sketch, Particles.js</p>
                <p><Bold>Date:</Bold> 2019</p>
                <Button>SEE IT LIVE</Button>
                <Button>SOURCE CODE</Button>
              </InfoBox>
              <img src={splash} width="70%;" alt="" />
            </TopSection>
            <Container>
              <Row>
                <Col>
                  <p>Cryptochambr is a Flatiron School project created over 4 days utilizing a Full stack Ruby on Rails framework. The app allows users to perform mock cryptocurrency trading. Users have full CRUD capability on their own account. They can add funds in USD, browse current crypto prices based on real time CoinMarketCap API info, purchase and sell coins, and get historical transaction stats.
              Users are also capable of filtering transactions by type (buy or sell) and coin. Transaction visual indicators also will display in red or green, based on if coin's current valuation is more or less than original purchase price.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={login} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={bitcoin} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={eos} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={qtum} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={history} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={buy} alt="" />
                </Col>
                <Col>
                  <Image src={sell} alt="" />
                </Col>
              </Row>
              <Footer>
                <Row>
                  <Col>
                    <Button>SEE IT LIVE</Button>
                    <Button>SOURCE CODE ON GITHUB</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button>BACK TO PORTFOLIO</Button>
                  </Col>
                  <Col>
                    <Button>NEXT PROJECT</Button>
                  </Col>
                </Row>
              </Footer>
            </Container>
          </Content>
        </Container>
      </Main>
    </div>
  )
}

}