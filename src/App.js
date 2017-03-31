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
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
        <Itembox itemName="invoker" />
      </div>
    );
  }
}

export default App;
