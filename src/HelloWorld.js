import React from 'react';

class HelloWorld extends React.Component {

    render() {

        // let isAnonymous = false;

        const items = ['rice', 'chicken', 'cookies'];

        return (
            <div>
                <h1>Hello, World</h1>
                <p>Welcome to React!</p>
                <p>{this.props.a}</p>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
            </div>
        )

    }

}

export default HelloWorld;