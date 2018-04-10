import React from 'react';
import pokemonService from '../services/pokemon.service';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'charmeleon',
      weight: '',
      abilities: []
    }
  }

  getPokemon = (e) => {
    e.preventDefault();
    pokemonService.getPokemon(this.state.searchString).then((response) => {
      console.log(response)
      const pokemon = response.data
      this.setState({
        abilities: pokemon.abilities,
        weight: pokemon.weight,
        spriteBack: pokemon.sprites.back_default,
        spriteFront: pokemon.sprites.front_default

      })
    }).catch((err) => {
      console.log(err);
    })
  }

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  }


  render() {
    
    return (
      <div className="container pokemonSection">
        <div>
          <p>Pokemon:
            <img src={this.state.spriteFront} alt="" />
            <img src={this.state.spriteBack} alt="" />
          </p>
          <p>Weight: {this.state.weight}</p>
          {
            this.state.abilities.map((ability) => {
              return (
                <div key={ability.slot}>
                  <h4>Ability: </h4>
                  <p>{ability.ability.name}</p>
                </div>
              )
            })
          }
        </div>
        

        <form className="formSection form-inline justify-content-center" onSubmit={e => this.getPokemon(e)}>
          <div className="form-group">
            <input className="form-control text-center" type="text" value={this.state.searchString} onChange={this.handleChange} />
          </div>
          <button className="formButton btn btn-primary">
            Get them!
          </button>
        </form>
      </div>
    );
  }
}

export default Pokemon;
