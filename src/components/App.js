import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductsList'
import products from '../data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container align-items-center">
          <header className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
              <Header />
            </div>            
          </header>

          <main className="row">
            <ProductList products={products} />                              
          </main>
        </div>
      </div>
    );
  }
}

export default App;
