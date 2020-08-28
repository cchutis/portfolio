import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'

export default class BioRecoveryPage extends React.Component {

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
        <title>Bio Recovery</title>
        <meta name="description" content="Bio Recovery Wordpress Website" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="Wordpress Website"
                        revealDuration={700}
                        revealDelay={1000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Bio Recovery"
                        revealDuration={500}
                        revealDelay={600}
                        parentMethod={this.reveal}
                    />
           </Heading2>
           <p>Project: Bio Recovery
Type: Web Design/Dev
Tools: Photoshop, Illustrator, After Effects, Brackets, Sketch
Date: 2018</p>
<p>Bio Recovery's website was built on a Wordpress platform utilizing animated elements and custom CSS modern styling. A style guide was created and used for the company's branding.</p>

          </Content>
        </Container>
      </Main>
    </div>
  )
}

}