import React from 'react';

class Pokemon extends React.Component {

    render() {

        const { pokemons } = this.props

        return (
            pokemons.map(({id, name, image, type}, i) => {
                const isOdd = i % 2 === 1
                return (
                        <tr key={id} style={{backgroundColor: isOdd && '#474747'}}>
                            <td>{name}</td>
                            <td><img src={image} alt={name} /></td>
                            <td>{type}</td>
                        </tr>
                    )
                }
            )
        )
    }

}

export default Pokemon