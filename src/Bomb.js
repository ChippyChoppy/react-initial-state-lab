import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { secondsLeft: props.initialCount }
        console.log(this.state)
    }

    render() {
        
        if (this.state.secondsLeft === 0) {
            return (
                <p>Boom!</p>
            )
        } else {
            return (
                <p>{this.state.secondsLeft} seconds left before I go boom!</p>
            )
        }
    }
} // class end

export default Bomb
