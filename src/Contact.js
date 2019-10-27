import React, { Component } from 'react'

const ContactTitle = () => {
    return (
        <div className="contact">
            <h1>This is My Contact Information</h1>
        </div>
    )
}

class Contact extends Component {
    render() {
        return (
            <ContactTitle />
        )
    }
}

export default Contact