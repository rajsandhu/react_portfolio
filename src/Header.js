import React, { Component } from 'react'

const HeaderTitle = () => {
    return (
        <h1>This is my Header</h1>
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