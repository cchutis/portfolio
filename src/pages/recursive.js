import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Helmet from 'react-helmet'
import BaffleText from 'components/baffle-text'

export default class RecursivePage extends React.Component {

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
        <title>Recursive</title>
        <meta name="description" content="Recursive Project Management App" />
      </Helmet>
      <Main style={{height: `${this.state.height}px`}}>
        <Container>
          <Content>
           <Heading1>
           <BaffleText
                        text="React Single Page App"
                        revealDuration={700}
                        revealDelay={1000}
                        parentMethod={this.reveal}
                    />
           </Heading1>
           <Heading2>
           <BaffleText
                        text="Recursive"
                        revealDuration={500}
                        revealDelay={600}
                        parentMethod={this.reveal}
                    />
           </Heading2>
           <p>	
           Project: Recursive Project Management App
Type: React Web App
Tools: JavaScript, React, Ruby on Rails
Date: 2019</p>
            <p>Recursive is a project management app, ala Trello, built over the course of 4 days at Flatiron School. The app is a full React app, with a Rails backend. The app allows for full CRUD actions, as well as allowing the user to create multiple projects, and tasks within each project. App has full live search and filter actions via controlled forms. Tasks and projects can be assigned due dates as well as difficulty ratings. Stretch goal for difficulty ratings is to assign a user experience for completing tasks, based on rating level, and will unlock various perks, such as color themes and badges.</p>

          </Content>
        </Container>
      </Main>
    </div>
  )
}

}