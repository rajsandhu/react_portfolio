import React, { Component } from 'react'

const HeaderTitle = () => {
    return (
        <div className="header">
            <h1>This is my Header</h1>
        </div>
    )
}

class Header extends Component {
    render() {
        return (
            <HeaderTitle />
        )
    }
}

export default Header