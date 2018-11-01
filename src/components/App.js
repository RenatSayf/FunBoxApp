import React, { Component } from 'react';
import Header from './Header';
import ProductList from './ProductsList'
import products from '../data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <div className="row items">
              <ProductList products = {products}/>
            </div>
            
          </div>
        </main>
      </div>
    );
  }
}

export default App;
