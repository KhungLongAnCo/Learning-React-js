import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			sentences: ''
		}
	}

	onChange = (event) => {
		let name = event.target.name;
		let value = event.target.value;
		this.setState({
			[name]:value
		})
	}

	filterSentences = (event) =>{
		event.preventDefault();
		this.props.filterSentences(this.state.sentences);
	}
		render(){	
				return (					
					<div>
                        <form onSubmit = {this.filterSentences} onChange = {this.onChange}>
							<div className="col-md-6">                                  
								<input type="text" 
								onChange = {this.onChange}
								className="form-control" 
								value={this.state.sentences}
								name='sentences' 
								placeholder="Tìm kiếm . . ."
								/>                
							</div>
							<div className="col-md-3">                  
								<button type="submit" className="btn btn-primary" >Tìm kiếm</button>                  
							</div>		
						</form>				     
                    </div> 
				)
		}
}

const mapDispatchToProps = (dispatch, props) =>{
	return {
		filterSentences: (sentences) =>{
			dispatch(actions.search_task(sentences));
		}
	}
}

export default connect(null, mapDispatchToProps)(Search);
