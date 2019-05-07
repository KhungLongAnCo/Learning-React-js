import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Sort extends Component {
	constructor(props){
		super(props);
		this.state={
			by:'',
			value:''
		}
	}
	SortTask = (by, value) =>{
		this.setState({
			by:by,
			value:value
		})
		this.props.SortTask({by, value});
	}


		render(){	
			let {by} = this.state;
			let {value} = this.state;
				return (		
					
					<div className="col-md-3 ">
					        <button type="button" 
							className="btn btn-primary dropdown-toggle"
							data-toggle="dropdown"
							>Sắp Xếp</button>
							<ul 
							className="btn btn-primary dropdown-menu"	
							id="menuSort"						
							 required="required">
								<li  onClick={() => this.SortTask('name', 1)} >
								Theo tên A-Z &nbsp; &nbsp;
								<i className={(by === 'name' && value === 1) ? 'fas fa-check' : ''}></i>
								</li>
								<li  onClick={() => this.SortTask('name', -1)} >
								Theo tên Z-A &nbsp; &nbsp;
								<i className={(by === 'name' && value === -1) ? 'fas fa-check' : ''}></i>
								</li>
							</ul>                
					</div>    
				)
		}
}

const mapDispatchToProps = (dispatch, props) =>{
	return {
		SortTask: (sortBy) =>{
			dispatch(actions.Sort(sortBy));
		}
	}
}

export default connect(null, mapDispatchToProps)(Sort);
