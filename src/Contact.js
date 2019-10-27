import React, { Component } from 'react'

const ContactTitle = () => {
    return (
        <div>
            <h1>This is My Contact Information</h1>
        </div>
    )
}

// a dynamic function / component
const ContactInfo = props => (
    <div className="contact-info">
        Contact: {props.phoneNumber} -- email: {props.email}

    </div>
)



class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <ContactTitle />
                <ContactInfo phoneNumber="1234545" email="hey@you.hu" />
            </div>
        )
    }
}

export default Contact