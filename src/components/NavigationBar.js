import React from 'react';

export default class NavigationBar extends React.Component {



    render() {
        return (
            <nav className="container navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand" href="">Pokedex</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Pokemons</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}