import React from 'react'
import styled, { keyframes } from 'styled-components'
// import Progress from 'components/progress'
import Timeline from 'sections/about/parts/Timeline'
import aframe from './skills-icons/aframe.png'
import csharp from './skills-icons/csharp.png'
import css from './skills-icons/css.png'
import electron from './skills-icons/electron.png'
import html from './skills-icons/html.png'
import javascript from './skills-icons/javascript.png'
import node from './skills-icons/node.png'
import react from './skills-icons/react.png'
import rubyrails from './skills-icons/rubyrails.png'
import sass from './skills-icons/sass.png'
import unity from './skills-icons/unity.png'
import sketch from './skills-icons/sketch.png'

class TabsPart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tab: "skills"
        }
    }

    render() {
        const TabContainer = styled.div`
            min-height: 400px;
            margin-top: 20px;
            @media (max-width:767px) {
                margin-top: 50px;
                padding: 0 20px;
            }
        `
        const TabSelectors = styled.div`
            display: flex;
        `
        
        const ColorAnimation = keyframes`
            0%  {border-color: #04e5e5;}
            10% {border-color: #f37055;}
            20% {border-color: #ef4e7b;}
            30% {border-color: #a166ab;}
            40% {border-color: #5073b8;}
            50% {border-color: #04e5e5;}
            60% {border-color: #07b39b;}
            70% {border-color: #6fba82;}
            80% {border-color: #5073b8;}
            90% {border-color: #1098ad;}
            100% {border-color: #f37055;}
        `
        const TabSelector = styled.button`
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            background-color: transparent;
            border: none;
            margin: 0 10px 0 0;
            border-bottom: 2px solid #fff;
            transition: .5s;
            &:hover, &.active {
                animation: ${ColorAnimation} 10s infinite alternate;
            }
            &:focus {
                outline: none;
            }
            @media (max-width: 767px) {
                font-size: 18px;
            }
        `

        const Tabs = styled.div`
            margin-top: 20px;
        `

        const Fade = keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        `

        const Tab = styled.div`
            display: none;
            animation: ${Fade} 1s forwards;
        `

        const SkillsGrid = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
        const SkillsRow = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        `
        const SkillsItem = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `

        

        return(
            <TabContainer>
                <TabSelectors>
                    <TabSelector className={this.state.tab === "skills" ? "active" : ""} onClick={() => this.setState({tab: "skills"})}>
                        Skills
                    </TabSelector>
                    <TabSelector className={this.state.tab === "experience" ? "active" : ""} onClick={() => this.setState({tab: "experience"})}>
                        Experience
                    </TabSelector>
                    <TabSelector className={this.state.tab === "education" ? "active" : ""} onClick={() => this.setState({tab: "education"})}>
                        Education
                    </TabSelector>
                </TabSelectors>
                <Tabs>
                    <Tab style={{
                        display: this.state.tab === "skills" ? "block" : "none"
                    }}>
                        <SkillsGrid>
                            <SkillsRow>
                                <SkillsItem>
                                    <img src={javascript} alt="" />
                                    <p>JavaScript ES6</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={react} alt="" />
                                    <p>React/React Native</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={electron} alt="" />
                                    <p>Electron JS</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={node} alt="" />
                                    <p>Node JS</p>
                                </SkillsItem>
                            </SkillsRow>
                            <SkillsRow>
                                <SkillsItem>
                                    <img src={html} alt="" />
                                    <p>HTML5</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={css} alt="" />
                                    <p>CSS3</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={sass} alt="" />
                                    <p>Sass</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={aframe} alt="" />
                                    <p>A-Frame</p>
                                </SkillsItem>
                            </SkillsRow>
                            <SkillsRow>
                                <SkillsItem>
                                    <img src={rubyrails} alt="" />
                                    <p>Ruby on Rails</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={sketch} alt="" />
                                    <p>Sketch</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={unity} alt="" />
                                    <p>Unity 3D</p>
                                </SkillsItem>
                                <SkillsItem>
                                    <img src={csharp} alt="" />
                                    <p>C#</p>
                                </SkillsItem>
                            </SkillsRow>
                        </SkillsGrid>
                    </Tab>
                </Tabs>
                <Tabs>
                    <Tab style={{
                            display: this.state.tab === "experience" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2010 - Present" :  {
                                    title: "Developer / Designer",
                                    institution: "Leviathan Design Group LLC.",
                                    description: "Develop websites and media for companies, such as law firms, personal trainers, realtors, and a Chamber of Commerce. Create visual themes, styles, websites, advertisements and logos for clients’ companies. Developed and maintained website for New York Rangers Podcast, Blueshirts Breakaway."
                                },
                                "2013 - 2019" : {
                                    title: "Web Developer",
                                    institution: "Prestige Worldwide Industries LLC.",
                                    description: "Managed and created all media and marketing for 8 subsidiaries and their projects. Created and maintained 15 websites using Wordpress and HTML5/CSS. Developed an interactive Virtual Reality game that educates users on the crime scene cleanup industry and its related hazards using Unity & C#. Led an initiative to create a Virtual Reality enabled website using Janus VR, allowing people to enter virtual company space. Developed and maintained company app in Xcode/Objective C, published in iOS App Store. Trained and managed two web designers and an SEO specialist."
                                },
                                "2009 - 2013" : {
                                    title: "Web Developer",
                                    institution: "Zultech Systems Inc.",
                                    description: "Created websites, videos, logos and print media for clientele. Designed presentations via After Effects for the computer shop’s floor, which highlighted sales and general information."
                                },
                            }
                        }
                    />
                    </Tab>
                    <Tab style={{
                            display: this.state.tab === "education" ? "block" : "none"
                        }}>
                        <Timeline data={{
                                "2019" :  {
                                    title: "Software Engineer & FullStack Development",
                                    institution: "Flatiron School",
                                    description: "New York, NY"
                                },
                                "2009" : {
                                    title: "Computer Repair & Networking",
                                    institution: "Hunter Business School",
                                    description: "Medford, NY"
                                },
                                "2002 - 2004" : {
                                    title: "General Studies & Graphic Design Courses",
                                    institution: "Suffolk County Community College",
                                    description: "Selden, NY"
                                },
                                
                            }
                        }
                    />
                    </Tab>
                </Tabs>
            </TabContainer>
        )
    }
}

export default TabsPart
