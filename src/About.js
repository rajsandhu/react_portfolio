import React, { Component } from 'react'
import PictureFunction from './Picture'

const AboutTitle = () => {
    return (
        <div className="about">
            <h1>This is My About Me Section</h1>
            <PictureFunction />

        </div>
    )
}

class About extends Component {
    render() {
        return (
            <AboutTitle />
        )
    }
}

export default About