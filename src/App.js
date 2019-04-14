import React, { Component } from 'react';
import './App.css';
import Products from './componets/product'; 


class App extends Component {
  hadlingRefs = () => {
    alert(this.refs.name.value);
  }
  render() {
    let product = [
      {
          id:1,
          name:'sp1',
          price: 100,
          status: true
      },
      {
          id:2,
          name:'sp2',
          price: 200,
          status: true
      },
      {
          id:3,
          name:'sp3',
          price: 300,
          status: false
      }
  ]
  let elements = product.map((e, index) => {
  if(e.status){
      return (
        <Products 
        key={index}
        name={e.name}
        price={e.price}
        />
      )
  }
}   
)

    return (
      
   <div>  
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand"> Props</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </nav>
      <div className="panel panel-default">
       <div className="panel-body">
          <input type='text' ref='name'/>
          
       </div>
       <button type="button" className="btn btn-large btn-block btn-default" onClick={this.hadlingRefs}>Show</button>
     </div>
      <div className="container">
        {elements}
      </div>
      
   </div>    
    )
}

}

export default App;
