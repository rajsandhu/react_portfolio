import React, { Component } from 'react'
import PictureFunction from './Picture'

const AboutInfo = () => {
    return (
        <div className="about">
            <h1>This is My About Me Section</h1>
            <PictureFunction />
            <div className="about-text">I like cheese, chocolate, and, lately, apples</div>

        </div>
    )
}

class About extends Component {
    render() {
        return (
            <AboutInfo />
        )
    }
}

export default About