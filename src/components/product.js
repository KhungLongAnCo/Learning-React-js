import React, { Component } from 'react';

class Products extends Component{
    // constructor(props){
    //     super(props);
    //     this.Buy = this.Buy.bind(this);
    // }
    Buy = () => {
        alert(this.props.name)
    }
    render(){
        return (
            
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <a className="thumbnail">
                    <img  alt="" />
                </a>
                <h2>Name:{this.props.name}</h2>
                <p>Price:{this.props.price}</p>
                
                <button type="button" className="btn btn-info" onClick={this.Buy}>buy Now</button>
                
            </div>
            
        )
    }
}

export default Products;