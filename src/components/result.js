import React, {Component} from 'react';

class Result extends Component{
    changeColor(){
        return {
            color:this.props.setColor,
            borderColor: this.props.setColor,
            fontSize: this.props.setSize
        }
    }
    render(){
        return(    
            <div className="container col-md-12">
            <br />
                <div style={ this.changeColor() } >Color  { this.props.setColor}: Font-size: {this.props.setSize}</div>
                <div className='content' style={ this.changeColor() }>Content Setting</div>
            </div>
        )
    }
}

export default Result;