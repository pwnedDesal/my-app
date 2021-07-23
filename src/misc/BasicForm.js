import React from 'react';

class BasicForm extends React.Component {

    initState = {
        firstName: '',
        lastName: ''        
    }

    state = {...this.initState}

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleReset = () => {
        this.setState({...this.initState})
    }

    render() {

        const fullname = `${this.state.firstName} ${this.state.lastName}`
        
        return (
            <form style={{textAlign: 'left', border: '1px solid #fff', padding: '10px 25px'}}>
                First name: <input
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                <br />
                Last name: <input
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                <br />
                <button type="button" onClick={this.handleReset}>Reset</button>
                <p>{fullname!==" " && "Welcome, "} {fullname}</p>
            </form>
        )
    }

}

export default BasicForm 