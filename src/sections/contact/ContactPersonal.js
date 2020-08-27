import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { graphql, StaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import AnimationContainer from 'components/animation-container'
// import ContactPersonalForm from './parts/ContactPersonalForm.js'

class ContactPersonal extends React.Component {


    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #000;
            padding: 100px 0;
            position: relative;
        `

        // const FormRow = styled(Row)`
        //    background-color: #111;
        // `

        // const ContactCol = styled(Col)`
        //     min-height: 600px;
        //     max-height: 600px;
        //     padding: 0;
        //     display: flex;
        //     align-items: center;
        // `

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

        // const Gradient = styled.div`
        //     position: absolute;
        //     height: 100%;
        //     width: 100%;
        //     top: 0;
        //     clip-path: polygon(0% 100%, 10px 100%, 10px 10px, calc(100% - 10px) 10px, calc(100% - 10px) calc(100% - 10px), 10px calc(100% - 10px), 10px 100%, 100% 100%, 100% 0%, 0% 0%);
        //     background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
        //     background-size: 300% 300%;
        //     animation: ${gradientAnimation} 5s ease-in-out infinite;
        // `




        // const Map = styled.iframe`
        //     border: none;
        //     height: 100%;
        //     width: 100%;
        // `

        const IconRow = styled(Row)`
            margin-top: 150px;
        `

        const IconCol = styled(Col)`
            @media (max-width: 500px) {
              margin-bottom: 140px;
            }
        `

        const IconContainer = styled.div`
            width: 150px;
            height: 150px;
            margin: auto;
            padding: 35px;
            text-align: center;
            position: relative;
            bottom: 75px;
            background: linear-gradient(120deg, #04e5e5, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
            background-size: 300% 300%;
            animation: ${gradientAnimation} 5s ease-in-out infinite;
            border-radius: 150px;
            transition: .5s;
        `
        
        const InfoPart = styled.div`
            min-height: 250px;
            background-color: #111;
            border: 2px solid #444;
        `
        const Icon = styled.img`
            height: 70px;
            width: 70px;
            object-fit: contain;
        `

        const InfoTitle = styled.h4`
            font-size: 35px;
            color: #fff;
            font-family: Teko;
            text-align: center;
        `

        const Info = styled.div`
            position: relative;
            bottom: 30px;
        `

        const InfoLinkContainer = styled.div`
            text-align: center;
        `

        const InfoLink = styled.a`
            color: #04e5e5;
            transition: .5s;
            &:hover {
              color: #fff;
              text-decoration: none;
            }
        `
        

        return(
            <Section id="contact">
                <Container>
                  {/* <AnimationContainer animation="fadeIn">
                    <FormRow>
                      <ContactCol md={6}>
                          <ContactPersonalForm />
                          <Gradient />
                      </ContactCol>
                      <ContactCol md={6}>
                        <Map  
                          title="map"
                          src="https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyDZFikQ-ag7ljyfw-4XaT6yl3WeVUChSj4&center=40.85283066925672,-72.94907540000001&zoom=10&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x242f3e&style=element:labels.text.fill%7Ccolor:0x746855&style=element:labels.text.stroke%7Ccolor:0x242f3e&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:administrative.land_parcel%7Celement:labels%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi%7Cvisibility:off&style=feature:poi%7Celement:labels.text%7Cvisibility:off&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:poi.park%7Celement:geometry%7Ccolor:0x263c3f&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x6b9a76&style=feature:road%7Celement:geometry%7Ccolor:0x38414e&style=feature:road%7Celement:geometry.stroke%7Ccolor:0x212a37&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x9ca5b3&style=feature:road.arterial%7Celement:labels%7Cvisibility:off&style=feature:road.highway%7Celement:geometry%7Ccolor:0x746855&style=feature:road.highway%7Celement:geometry.stroke%7Ccolor:0x1f2835&style=feature:road.highway%7Celement:labels%7Cvisibility:off&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0xf3d19c&style=feature:road.local%7Cvisibility:off&style=feature:road.local%7Celement:labels%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:transit%7Celement:geometry%7Ccolor:0x2f3948&style=feature:transit.station%7Celement:labels.text.fill%7Ccolor:0xd59563&style=feature:water%7Celement:geometry%7Ccolor:0x17263c&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x515c6d&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0x17263c&size=500x500"/>
                      </ContactCol>
                    </FormRow>
                  </AnimationContainer> */}
                  <IconRow>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={500}>
                          <InfoPart>
                            <IconContainer>
                                <Icon src={this.props.emailIcon.childImageSharp.fluid.src} alt="email" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Email
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="mailto:constantinechutis@gmail.com">
                                  constantinechutis@gmail.com
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1000}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.phoneIcon.childImageSharp.fluid.src} alt="phone" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Phone
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink href="tel:+16312941908">
                                  (631) 294-1908
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                      <IconCol md={4}>
                        <AnimationContainer animation="fadeIn" delay={1500}>
                          <InfoPart>
                            <IconContainer>
                              <Icon src={this.props.mapIcon.childImageSharp.fluid.src} alt="map" />
                            </IconContainer>
                            <Info>
                              <InfoTitle>
                                Location
                              </InfoTitle>
                              <InfoLinkContainer>
                                <InfoLink target="_blank" href="https://maps.google.com/maps?ll=53.343244,-6.259338&z=14&t=m&hl=en&gl=US&mapclient=embed&q=1%20Grafton%20Street%20Dublin%20Ireland">
                                  Long Island, New York
                                </InfoLink>
                              </InfoLinkContainer>
                            </Info>
                          </InfoPart>
                        </AnimationContainer>
                      </IconCol>
                  </IconRow>
                </Container>
            </Section>
        )
    }

}

export default props => (
  <StaticQuery
    query={graphql`
    query {
      emailIcon: file(relativePath: {eq: "icons/email-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      mapIcon: file(relativePath: {eq: "icons/location-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      phoneIcon: file(relativePath: {eq: "icons/phone-icon.png"}) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
    `}
    render={({ 
      emailIcon, 
      mapIcon, 
      phoneIcon}) => <ContactPersonal  
      emailIcon={emailIcon} 
      mapIcon={mapIcon} 
      phoneIcon={phoneIcon}
      {...props} />}
  />
)