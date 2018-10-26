import React, { Component } from 'react';
import Header from './Header'
import Product from './Product'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <div className="row row-centered items">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
