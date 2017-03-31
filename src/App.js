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
        <Itembox itemName="INVOKER" detail="Main stat is INT"/>
        <Itembox itemName="DROW RANGER"  detail="Main stat is AGI"/>
        <Itembox itemName="MIRANA"  detail="Main stat is AGI"/>
        <Itembox itemName="TINY"  detail="Main stat is STR"/>
        <Itembox itemName="EARTHSHAKER"  detail="Main stat is STR"/>
        <Itembox itemName="BEASTMASTER"  detail="Main stat is STR"/>
        <Itembox itemName="SNIPER"  detail="Main stat is AGI"/>
        <Itembox itemName="PHANTOM ASSASSIN"  detail="Main stat is AGI"/>
        <Itembox itemName="EARTH SPIRIT"  detail="Main stat is STR"/>
        <Itembox itemName="NYX ASSASSIN"  detail="Main stat is AGI"/>
        <Itembox itemName="PUDGE"  detail="Main stat is STR"/>
        <Itembox itemName="NIGHT STALKER"  detail="Main stat is STR"/>
      </div>
    );
  }
}

export default App;
