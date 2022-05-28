
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
//import DisplayProduct from './components/displayproducts';
import products from './products';
//import { useState } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
  }

  handleQuantityChange = (quantity, id, operator = 0) => {
    let products = this.state.products 

    if (products[0].value >= 0 && products[0].value < 10) {
      products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
      this.setState({ products })
      console.log()
    }
  };

  render() {
    return (
      <div className='App text-secondary'>
        <NavBar 
          totalValue={this.state.products.map(prod=>prod.value).reduce((acc, curr, index) => 
                    acc + curr, 0)      
                }
          prods={this.state.products}
          handleQuantityChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

export default App;

