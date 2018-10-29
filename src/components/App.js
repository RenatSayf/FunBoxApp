import React, { Component } from 'react';
import Header from './Header';
import Product from './Product';
import product from '../data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <div className="row row-centered items">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product product={product[0]}/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product product={product[1]}/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 text-center">
                <Product product={product[2]}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
