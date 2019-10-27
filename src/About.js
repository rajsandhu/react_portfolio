import React, { Component } from 'react'

const AboutTitle = () => {
    return (
        <div className="about">
            <h1>This is My About Me Section</h1>
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