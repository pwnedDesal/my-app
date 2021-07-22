import React from 'react';

class Button extends React.Component {

  render() {

    return (
      <button
        type="button"
        className="text-sm bg-transparent hover:bg-yellow-800 text-yellow-400 font-semibold hover:text-white py-1 px-2 border border-yellow-500 hover:border-transparent rounded"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )

  }

}

export default Button