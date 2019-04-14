import React, { Component } from 'react';
import './App.css';


class App extends Component {
  showProducts(products){
    if(products.status){
      return (
        <h3>
        id: {products.id}
        <br />
        name: { products.name}
        <br />
        price: {products.price}
        <br />
        status: { products.status ? 'active' : 'pending'}
      </h3>
      )
    }
  }
  render() {
    const products = {
      id:1,
      name: 'durex',
      price: 1809098,
      status: false
    }
    var users = [
      {
        id:1,
      name: 'durex',
      price: 1809098,
      status: false
      },
      {
        id:2,
      name: 'xxx',
      price: 1809098,
      status: true
      },
      {
        id:3,
      name: 'yyy',
      price: 1809098,
      status: false
      }
    ];
    var elements = users.map((element, index) => {
      return <h2 key= {index}>
        id: {element.id},
        name: {element.name},
        price : {element.price},
        status: {element.status ? 'active' : 'pending'}
      </h2>
    })
    return (
     <div>
        {elements}
     </div>
    );
  }
}

export default App;
