import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <header>
        <h1>UserSearch</h1>
        <form>
          <input type={"text"}></input>
          <button type={"submit"}>Search</button>
        </form>
        <ul className="main-list">
          <li>
            <ul className="inner-list">
              <li><h2>ID</h2></li>
              <li>Dummy</li>
              <li>Dummy</li>
              <li>Dummy</li>
            </ul>
          </li>
          <li>
            <ul className="inner-list">
              <li><h2>Name</h2></li>
              <li>Dummy</li>
              <li>Dummy</li>
              <li>Dummy</li>
            </ul>
          </li>
          <li>
            <ul className="inner-list">
              <li><h2>Email</h2></li>
              <li>Dummy</li>
              <li>Dummy</li>
              <li>Dummy</li>
            </ul>
          </li>


        </ul>
      </header>
    );
  }
}

export default App;
