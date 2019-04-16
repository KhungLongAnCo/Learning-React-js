import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/colorPicker';
import ChangSize from './components/changSize';
import Result from './components/result';
import Reset from './components/reset';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color:'red',
      size: 14,
      resetAll:{
        color:'red',
        size: 14
      }
    }
  }
  onSetColor = (params) => {
  this.setState({
    color: params
  })
  }
  onSetSize = (size) => {
    this.setState({
      size:size
    })
  }
  resetComplete = (params) => {
    const resetAll = this.state.resetAll;
    this.setState({
      color:resetAll.color,
      size:resetAll.size
    })
  }
  render(){
    return (
      <div className="container wrrap" >
        <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
        <ChangSize onReceiveSize={this.onSetSize}/>
        <Reset ResetSucess={this.resetComplete}/>
        <hr />
        <Result setColor = {this.state.color} setSize= {this.state.size}/>
       </div> 
    )
  }
}

export default App;
