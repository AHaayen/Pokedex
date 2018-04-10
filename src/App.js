import React, { Component } from 'react';
import '../src/styles/Header.css';
import pokemonService from './services/pokemon.service';
import Header from '../src/components/Header'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchString: 'bulbasaur',
      weight: '',
      abilities: []
    }
  }

 getPokemon = () => {
  pokemonService.getPokemon(this.state.searchString).then((response) => {
    console.log(response);
    const pokemon = response.data
    console.log(pokemon)
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
  this.setState({searchString: event.target.value});
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />
        <br />
        <input type="text" value={this.state.searchString} onChange={this.handleChange} />
        <button onClick={this.getPokemon}>
            Get them!
          </button>
         
            <div>
            <p>{this.state.weight}</p>
            {
              this.state.abilities.map((ability) => {
                return <p key={ability.slot}>{ability.ability.name}</p>
              })
              
          }     
              <div>
                <img src={this.state.spriteFront} alt="" />
              </div>
              
              <div>
                <img src={this.state.spriteBack} alt=""/>
              </div>
            
            </div>
      </div>
    );
  }
}

export default App;
