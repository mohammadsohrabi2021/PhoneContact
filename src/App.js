import React, { Component } from 'react';
import "./App.css"
import Main from './components/Main/Main';
import Burger from './Burger';
class App extends Component {
  render() {
    return (
      <div className='Flexcontainer'>
        <Burger />
        <Main />
      </div>
    );
  }
}

export default App;