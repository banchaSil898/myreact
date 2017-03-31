import React, { Component } from 'react';
import Header from './Header';
import Itembox from './Itembox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Hello world
        </p>
        <Itembox itemName="INVOKER" />
        <Itembox itemName="DROW RANGER" />
        <Itembox itemName="MIRANA" />
        <Itembox itemName="TINY" />
        <Itembox itemName="EARTHSHAKER" />
        <Itembox itemName="BEASTMASTER" />
        <Itembox itemName="SNIPER" />
        <Itembox itemName="PHANTOM ASSASSIN" />
        <Itembox itemName="EARTH SPIRIT" />
        <Itembox itemName="NYX ASSASSIN" />
        <Itembox itemName="PUDGE" />
        <Itembox itemName="NIGHT STALKER" />
      </div>
    );
  }
}

export default App;
