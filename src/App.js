import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import SearchResults from './SearchResults';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchResults />
      </div>

    );
  }
}

export default App;
