import React from 'react'

class ImageSlider extends React.Component {
    state = { currentSlideIndex: 0 }
    render() {
        return (
            <p>I am on slide {this.state.currentSlideIndex}</p>
        )
    }
} // class end

export default ImageSlider