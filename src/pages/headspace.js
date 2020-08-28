import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'

export default class HeadspacePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        height: 0,
        width: 0,
        animation : false,
        complete: false,
        hide: false
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
          `

  return(
    <div>
      <Helmet>
        <title>Headspace</title>
        <meta name="description" content="Headspace VR Web App" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Virtual Reality Web App"
                        revealDuration={700}
                        revealDelay={1000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Headspace"
                        revealDuration={500}
                        revealDelay={600}
                        parentMethod={this.reveal}
                    />
           </Heading2>
           <p>	
Project: Headspace VR Web App
Type: React/A-frame Web VR App
Tools: React(Preact), A-frame, WebXR, Ruby on Rails
Date: 2019</p>
            <p>Headspace is a VR web app created as a final project at Flatiron School over the course of 2 weeks. The project was built using a React/Aframe frontend, and Ruby on Rails backend. Preact, more specifically, was used for lightweight logic, while Aframe handled the heavy lifting on browser based rendering. The app has 2 modes, Immersive Mode, which allows the user to load up various environments, allowing them to relax with the sights and sounds of the selected environment (Beach, Space, Campfire, etc.) Users can also enable relaxing music, as well as mute the SFX/music. Headspace's second mode, Theater mode, is a personal movie theater the User can watch movies, on an oversized cinema screen. This app was demoed at the Flatiron's Science Fair, and users were able to experience the app in browser, and in VR using a Google Cardboard & mobile phone setup. Theater mode was demoed using downloaded movie trailers from Apple Movie Trailer's Website.</p>

          </Content>
        </Container>
      </Main>
    </div>
  )
}

}