import React from 'react';

class AddItemForm extends React.Component {

    state = {
        name: '',
        category: '',
        price: 0,
        image: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addNewItem = () => {
        
        const newItem = {...this.state}

        this.props.addItem(newItem)

    }

    render() {
        return (
            <div style={{marginBottom: '25px', textAlign: 'left'}}>
                Name: <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                <br />
                Category: <input
                        name="category"
                        type="text"
                        value={this.state.category}
                        onChange={this.handleChange}
                        />
                <br />
                Price: <input
                        name="price"
                        type="number"
                        value={this.state.price}
                        onChange={this.handleChange}
                        />
                <br />
                Image: <input
                        name="image"
                        type="text"
                        value={this.state.image}
                        onChange={this.handleChange}
                        />
                <br />
                <button onClick={this.addNewItem}>Add</button>                                
            </div>
        )
    }

}

export default AddItemForm