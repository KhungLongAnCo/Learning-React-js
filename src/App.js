import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
	// displayForm 
	displayForm = () => {
		this.props.openForm();
		this.props.onClearTask();
	}
		render(){	
			let isDisplayForm = this.props.isDisplayForm === true ? <TaskForm 
			 /> : '';

			
				return (					
					<div className="container ">
						<h1 className="text-center">Quản lý công việc</h1>
						<hr />
						<br />
						<div className="col-lg-3 col-md-3 col-xs-3">
							{ isDisplayForm }
						</div>
						<div 
						className={isDisplayForm ? 'col-lg-9 col-md-9 col-xs-9' : 'col-lg-12 col-md-12 col-xs-12' }
						>
							<div className="col-md-12">              
								<button type="button" 
								className="btn btn-primary"
								onClick={this.displayForm}
								>
								+ Thêm công việc
								</button>    						
								<br />
								<br />        
							</div>
							<Control />   
							
							<div className="col-lg-12 col-md-12 col-xs-12">
								<br />
								<TaskList  />
							</div>   
						</div>					
					</div>
				)
		}
}

const mapStateToProps = (state) => {
	return {
		isDisplayForm: state.displayForm
	}
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		openForm: () =>{
			dispatch(actions.openForm())
		},
		onClearTask: () => {
			dispatch(actions.editTask());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
