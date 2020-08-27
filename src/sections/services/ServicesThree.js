import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'

class ServicesOne extends React.Component {

    shouldComponentUpdate() {
        return false
    }
      
    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
        `
        const gradientAnimation = keyframes`
            0% {
                background-position: 15% 0%;
            }
            50% {
                background-position: 85% 100%;
            }
            100% {
                background-position: 15% 0%;
            }
        `

        const ColorAnimation = keyframes`
            0%  {background: #04e5e5;}
            10% {background: #f37055;}
            20% {background: #ef4e7b;}
            30% {background: #a166ab;}
            40% {background: #5073b8;}
            50% {background: #04e5e5;}
            60% {background: #07b39b;}
            70% {background: #6fba82;}
            80% {background: #5073b8;}
            90% {background: #1098ad;}
            100% {background: #f37055;}
        `

        const AnimatedShadow = keyframes`
            0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
            20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
            30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
            40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
            60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
            70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
            80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
            90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
            100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
        `
        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px 0;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                animation: ${AnimatedShadow} 10s infinite alternate;
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4`
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            width: 120px;
            height: 120px;
            margin: 0 auto 25px auto;
            background-color: #fff;
            border-radius: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: #c5c5c5;
            font-weight: 300;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                position: relative;
                bottom: 2.5px;
                animation: ${ColorAnimation} 10s infinite alternate;
            }
        `

        return(
            <Section id="services">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Skills" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.frontend.childImageSharp.fluid.src} alt="Front End Development" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Front End Development
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Creating dynamic front end applications
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Emphasis on mobile friendly/SEO builds
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Experience with fullstack/APIs connections
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.uiux.childImageSharp.fluid.src} alt="UI/UX Design" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            UI/UX Design
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Focus on clean, robust layouts
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                User experience a priority
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Clear messaging and signals
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.vr.childImageSharp.fluid.src} alt="Virtual Reality Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Virtual Reality Development
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Interactive Unity-based VR
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                User experience focus for new users
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Wide variety of platforms including Web
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.mobile.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Mobile App Development
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Development using React Native
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Deployment to iOS or Android
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Use of xCode/Native iOS hardware
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.design.childImageSharp.fluid.src} alt="Graphic Design & Branding" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Graphic Design & Branding
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Photoshop/Illustrator designs for front end
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Creation of style guides & company branding
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Creation of custom SVG icons & elements
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.motion.childImageSharp.fluid.src} alt="Motion Design" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Motion Design
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Animated SVG icons & media
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Transparent video to HTML5 standards
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Use of After Effects to enhance web video
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        frontend: file(relativePath: {eq: "icons/frontend-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
        uiux: file(relativePath: {eq: "icons/uiux-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
        vr: file(relativePath: {eq: "icons/vr-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
        design: file(relativePath: {eq: "icons/design-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
        motion: file(relativePath: {eq: "icons/motion-skills.png"}) {
          childImageSharp {
            fluid(maxWidth: 512) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        frontend,
        uiux,
        vr,
        mobile,
        design,
        motion}) => <ServicesOne  
        background={background}
        frontend={frontend}
        uiux={uiux}
        vr={vr}
        mobile={mobile}
        design={design}
        motion={motion}
        {...props} />}
    />
  )