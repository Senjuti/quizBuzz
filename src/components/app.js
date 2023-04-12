import React, { Component } from 'react';

import Questions from './questions';
import Result from './result';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="site-title">
          <a href="/">Trouve ta personnalité Fillactive</a>
        </h1>
        <Questions />
        <Result />
      </div>
    );
  }
}
