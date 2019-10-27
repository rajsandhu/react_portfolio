import React, { Component } from 'react'

const PictureFunction = () => {
    return (
        <div className="picture">
            <img
                src="https://media.licdn.com/dms/image/C5103AQHHBuPqvIoNPg/profile-displayphoto-shrink_800_800/0?e=1577923200&v=beta&t=U4tz-XRtbGi5JJLyJP1z8M9XcyEn-mvlaJvbMaMZfK0"
                alt="picture of Raj Sandhu"
                className="picture-img"
            />
        </div>
    )
}

// class Picture extends Component {
//     render() {
//         return (
//             <PictureFunction />
//         )
//     }
// }

export default PictureFunction;