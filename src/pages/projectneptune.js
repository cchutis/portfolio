import React from 'react'
import PageRevealer from '../components/page-revealer'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'
import bathroom from '../../content/images/portfolio-items/neptune/bathroom.png'
import bedroom from '../../content/images/portfolio-items/neptune/bedroom.png'
import driveway from '../../content/images/portfolio-items/neptune/driveway.png'
import lawn from '../../content/images/portfolio-items/neptune/lawn.png'
import mainmenu from '../../content/images/portfolio-items/neptune/mainmenu.png'
import menuTV from '../../content/images/portfolio-items/neptune/menuTV.png'
import modelhome from '../../content/images/portfolio-items/neptune/modelhome.png'
import patio from '../../content/images/portfolio-items/neptune/patio.png'
import street from '../../content/images/portfolio-items/neptune/street.png'


export default class ProjectNeptunePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        height: 0,
        width: 0,
        animation : false,
        complete: false,
      hide: false,
      pageTitle: "Project Neptune VR"
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
              font-size: 80px;
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
              min-height: 200px;
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
        <title>Project Neptune VR</title>
        <meta name="description" content="VR Showcase App" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <PageRevealer pageTitle={this.state.pageTitle} />
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Virtual Reality App"
                        revealDuration={700}
                        revealDelay={4000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Project Neptune VR"
                        revealDuration={500}
                        revealDelay={3000}
                        parentMethod={this.reveal}
                    />
           </Heading2>
            <TopSection>
              <InfoBox>
                <p><Bold>Project:</Bold> Project Neptune VR</p>
                <p><Bold>Type:</Bold> VR Showcase Application</p>
                <p><Bold>Tools:</Bold> Unity3D, Sketchup, C#, HTC Vive</p>
                <p><Bold>Date:</Bold> 2018</p>
              </InfoBox>
              <img src={street} width="70%;" alt="" />
            </TopSection>
            <Container>
              <Row>
                <Col>
                  <p>S-Squared 3D Printers asked me to develop a VR experience for potential investors on their large scale, concrete 3D printer. The project, dubbed Neptune, will be capable of printing homes and structures using conventional concrete. They wanted a VR application designed in Unity3D that they could show off the machine and its final product, which was designed by an architecture firm: a one-story ranch home which the machine is capable of printing.
The final product is an application in which potential investors can view the machine, tour the home, and view videos and photos of the team building and testing the machine.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={lawn} alt="" />
                </Col>
                </Row>
                <Row>
                <Col>
                  <Image src={modelhome} alt="" />
                </Col>
                <Col>
                  <Image src={mainmenu} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>The home was modeled by me in Sketchup, based off of the architectural blueprints provided by S-Squared 3D.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                SKETCHFAB
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={bedroom} alt="" />
                </Col>
                <Col>
                  <Image src={menuTV} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>In addition to the initial application being a virtual tour, other alpha versions include a version where potential homebuyers of the 3D printed home can customize the interior, with furniture and various colored walls. This alpha build will eventually become the basis for S-Squared 3D’s future plans, on offering 3D printed homes with ala carte customization options that users can experience before the home is built.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/70aCpgsJ0l8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={bathroom} alt="" />
                </Col>
                <Col>
                  <Image src={street} alt="" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Image src={driveway} alt="" />
                </Col>
                <Col>
                  <Image src={patio} alt="" />
                </Col>
              </Row>
              <Footer>
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