import React, { Component } from 'react'
import Header from './Header'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <Skills />
                <Contact />
            </div>
        )
    }
}

export default App
