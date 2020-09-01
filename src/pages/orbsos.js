import React from 'react'
import PageRevealer from '../components/page-revealer'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'
import splash from '../../content/images/portfolio-items/Orbs OS/splash.png'
import login from '../../content/images/portfolio-items/Orbs OS/login.png'
import create from '../../content/images/portfolio-items/Orbs OS/create.png'
import desktop from '../../content/images/portfolio-items/Orbs OS/desktop.png'

export default class OrbsOsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        height: 0,
        width: 0,
        animation : false,
        complete: false,
      hide: false,
      pageTitle: "ORBS OS"
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
        <title>Orbs OS</title>
        <meta name="description" content="Orbs OS JS Electron App" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <PageRevealer pageTitle={this.state.pageTitle} />
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Electron JS App"
                        revealDuration={700}
                        revealDelay={4000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Orbs OS"
                        revealDuration={500}
                        revealDelay={3000}
                        parentMethod={this.reveal}
                    />
           </Heading2>
            <TopSection>
              <InfoBox>
                <p><Bold>Project:</Bold> ORBS OS</p>
                <p><Bold>Type:</Bold> Native Application</p>
                <p><Bold>Tools:</Bold> JavaScript, Electron, Ruby on Rails</p>
                <p><Bold>Date:</Bold> 2019</p>
                <Button>SOURCE CODE</Button>
              </InfoBox>
              <img src={splash} width="70%;" alt="" />
            </TopSection>
            <Container>
              <Row>
                <Col>
                  <p>ORBS OS is a Flatiron School project created over 4 days using a frontend of Vanilla JavaScript and Electron Framework, with a Ruby on Rails backend. The app is a mock operating system, enabling users to create local profiles, set user photos using webcam, and has access to multiple mini-applications within the OS. Weather widget, task manager, calculator, piano/keyboard app, text editor/code editor, iframe web browser and timer are some of the micro apps found within the OS. Windows within the app can be drag and dropped, as well as customized user wallpapers, as well as full CRUD actions for user accounts.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={login} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={create} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={splash} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={desktop} alt="" />
                </Col>
              </Row>
              <Footer>
                <Row>
                  <Col>
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