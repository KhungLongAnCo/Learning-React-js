import React, {Component} from 'react';

class ChangSize extends Component{
    constructor(props){
        super(props);
        this.state = {
            size: 20
        }
    }
    upSize = () => {
        
        let size = this.state.size;
        if(size <= 32){    
        size+=2;     
        this.setState({
            size: size
        })
        this.props.onReceiveSize(size);
        }
    }
    downSize = () =>{
        let size = this.state.size;      
        if(size >= 10){        
        size-=2; 
        this.setState({
            size: size
        })
        this.props.onReceiveSize(size);
        }
    }
    render(){
        return(
            <div className="col-md-6">
                
                <div className="panel panel-primary">
                      <div className="panel-heading">
                            <h3 className="panel-title">Size: {this.state.size}</h3>
                      </div>
                      <div className="panel-body">                            
                            <span className="col-md-3">
                            <button type="button" 
                            className="btn btn-large btn-block btn-warning" 
                            onClick={this.upSize}
                            >Up</button>
                            </span>
                            <span className="col-md-3">
                            <button type="button" 
                            className="btn btn-large btn-block btn-warning"
                            onClick={this.downSize}
                            >Down</button>                            
                            </span>
                      </div>
                </div>
                
                
            </div>
        )
    }
}
export default ChangSize;