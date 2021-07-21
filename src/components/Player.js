import React from 'react';

class Player extends React.Component {

    render() {

        const { name, number } = this.props

        return (
            <div style={{marginBottom: '20px'}}>
                <div>{name}</div>
                <div>{number}</div>
            </div>
        )
    }

}

export default Player