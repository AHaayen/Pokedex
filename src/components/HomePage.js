import React from 'react';
import Header from './Header';
import Pokemon from './Pokemon';
import '../styles/styles.scss';


class HomePage extends React.Component {

render(){
    return(
        <section>
        <Header />
        <Pokemon />
        </section>
    )
}
}


export default HomePage;