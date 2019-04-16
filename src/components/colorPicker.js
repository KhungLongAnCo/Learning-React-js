import React, {Component} from 'react';

class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:['red', 'green', 'blue', 'gray']
        };
    }
    ChangeColor(color){
        this.props.onReceiveColor(color);
    }
    showColor(color){
        return color;
    }
    render(){       
             let elements = this.state.color.map((color, index) => {
                 return <div key={index} 
                 className={this.showColor(color)} 
                 onClick={() => this.ChangeColor(color)} 
                 id={this.props.color === color ? 'isActive' : ''}
                 ></div>
             });
        return(
            <div className="col-md-6">
                
                <div className="panel panel-danger">
                      <div className="panel-heading">
                            <h3 className="panel-title">ColorPicker</h3>
                      </div>
                      <div className="panel-body">
                           { elements }
                      </div>
                </div>
                                
            </div>

        )
    }
}
export default ColorPicker;