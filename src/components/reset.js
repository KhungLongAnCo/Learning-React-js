import React, {Component} from 'react';

class Reset extends Component{

    resetComplete = () => {
       this.props.ResetSucess();
    }
    render(){
        return(
            <div className="col-md-3">
                
                <button type="button" 
                className="btn btn-large btn-block btn-success" 
                onClick={this.resetComplete}
                >reset</button>
                
            </div>
        )
    }
}
export default Reset;