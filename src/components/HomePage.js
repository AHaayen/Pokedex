import React from 'react';
import NavigationBar from './NavigationBar';
import Header from './Header';
import Pokemon from './Pokemon';

export default class HomePage extends React.Component {

render(){
    return(
        <section>
        <NavigationBar />
        <Header />
        <Pokemon />
        </section>
    )
}
}
