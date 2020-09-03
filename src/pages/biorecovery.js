import React from 'react'
import PageRevealer from '../components/page-revealer'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'
import headerImg from '../../content/images/portfolio-items/Bio Recovery/mockup.png'
import homePage from '../../content/images/portfolio-items/Bio Recovery/homepage.png'
import servicesPage from '../../content/images/portfolio-items/Bio Recovery/services.png'
import locationsPage from '../../content/images/portfolio-items/Bio Recovery/location.png'
import logo from '../../content/images/portfolio-items/Bio Recovery/logo.png'
import panels from '../../content/images/portfolio-items/Bio Recovery/panels.png'
import styleGuide from '../../content/images/portfolio-items/Bio Recovery/styleGuide.svg'
import mobile1 from '../../content/images/portfolio-items/Bio Recovery/mobile1.png'
import mobile2 from '../../content/images/portfolio-items/Bio Recovery/mobile2.png'
import mobile3 from '../../content/images/portfolio-items/Bio Recovery/mobile3.png'

export default class BioRecoveryPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        height: 0,
        width: 0,
        animation : false,
        complete: false,
        hide: false,
        pageTitle: "Bio Recovery"
    }
    this.reveal = this.reveal.bind(this)
  }

  reveal() {
    if (!this.state.complete) {
        this.setState({animation: true, complete: true})
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
          padding: 50px 10px;
          `

          const InfoBox = styled.div`
              width: 30%;
              background-color: #5b7f86;
              padding: 20px;
              overflow: hidden;
              min-height: 275px;
              border-radius: 10px;
              margin-right: 20px;
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
              margin-bottom: 10px;
              &:hover {
                      color: #5b7f86;
                      background-color: white;
                    }
          `

          const Image = styled.img`
              width: 100%;
              padding: 20px 0;
          `

          const Footer = styled.div`
              margin-bottom: 100px;
          `
          
  return(
    <div>
      <Helmet>
        <title>Bio Recovery</title>
        <meta name="description" content="Bio Recovery Wordpress Website" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <PageRevealer pageTitle={this.state.pageTitle} />
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Wordpress Website"
                        revealDuration={700}
                        revealDelay={4000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Bio Recovery"
                        revealDuration={500}
                        revealDelay={3000}
                        parentMethod={this.reveal}
                    />
           </Heading2>
           <TopSection>
            <InfoBox>
              <p><Bold>Project:</Bold> Bio Recovery</p>
              <p><Bold>Type:</Bold> Web Design/Dev</p>
              <p><Bold>Tools:</Bold> Photoshop, Illustrator, After Effects, Brackets, Sketch</p>
              <p><Bold>Date:</Bold> 2018</p>
              <a href="https://www.biorecovery.com" target="_blank" rel="noopener noreferrer"><Button>SEE IT LIVE</Button></a>
            </InfoBox>
            <img src={headerImg} width="70%;" alt="" />
           </TopSection>
           <Container>
             <Row>
               <Col>
                <Image src={homePage} alt="" />
               </Col>
               <Col>
                <Image src={servicesPage} alt="" />
                <Image src={locationsPage} alt="" />
               </Col>
             </Row>
            <Row>
              <Col>
                <Image src={logo} alt="" />
              </Col>
              <Col>
                <p>Bio Recovery's website was built on a Wordpress platform utilizing animated elements and custom CSS modern styling. A style guide was created and used for the company's branding.</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={panels} alt="" /> 
              </Col>
            </Row>
            <Row>
              <Col>
               <Image src={styleGuide}alt="" />  
              </Col>
            </Row>
            <Row>
              <Col>
                  <Image src={mobile1} alt="" />
              </Col>
              <Col>
                  <Image src={mobile2} alt="" />
              </Col>
              <Col>
                  <Image src={mobile3} alt="" />
              </Col>
            </Row>
            <Footer>
              <Row>
                <Col>
                  <a href="https://www.biorecovery.com" target="_blank" rel="noopener noreferrer"><Button>SEE IT LIVE</Button></a>
                </Col>
              </Row>
              <Row>
                <Col>
                <a href="/"><Button>BACK TO PORTFOLIO</Button></a>
                </Col>
                <Col>
                <a href="/sq3d"><Button>NEXT PROJECT</Button></a>
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