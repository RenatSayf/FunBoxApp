import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <div class="container">
            <div class="row">
              <h1 class="col-12 text-center">
                Ты сегодня покормил кота?
              </h1>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
