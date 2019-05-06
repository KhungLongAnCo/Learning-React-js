import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			filterList:{
				filterName:'',
				filterStatus: '',
				filterSentences: ''
			},
			Sort:{
				by:'',
				value:''
			}
		}
	}
	
	// displayForm 
	displayForm = () => {
		this.props.openForm();
		this.props.onClearTask();
	}
	// filter data 
	filterList = (name, status) => {
		this.setState({
			filterList:{
				filterName: name,
				filterStatus: status,
				filterSentences: ''
			}
		})
	}
	filterSentences = (data) => {
		this.setState({
			filterList:{
				filterSentences: data
			}
		})
	}
	SortList = (by, value) =>{
		this.setState({
			Sort:{
				by:by,
				value:value
			}
		})
	}

		render(){	
			let isDisplayForm = this.props.isDisplayForm === true ? <TaskForm 
			 /> : '';
			// let {filterList} = this.state;
			// let filterName = filterList.filterName;
			// let filterStatus = filterList.filterStatus;
			// let filterSentences = filterList.filterSentences;
			// let {Sort} = this.state;
			// show form 

			// FILTER
			// filter by name
			// if(filterName){
			// 	tasks = tasks.filter((task) => {
			// 		return task.name.toLowerCase().indexOf(filterName) >= 0;
			// 	})
			// }
			// // filter status
			// if(filterStatus === 'active'){
			// 	tasks = tasks.filter((task) => {
			// 		return task.status === true
			// 	})
			// }
			// if(filterStatus === 'complete'){
			// 	tasks = tasks.filter((task) => {
			// 		return task.status === false
			// 	})
			// }
			// // filter Sentences
			// if(filterSentences){
			// 	tasks = tasks.filter((task) => {
			// 		return task.name.indexOf(filterSentences) !== -1;
			// 	})
			// }
			// // sort by name A- Z
			// if(Sort.by === 'name' && Sort.value === 1){
			// 	tasks = tasks.sort(function(a, b){
			// 		if(a.name < b.name){ return -1;}
			// 		if(a.name > b.name){ return 1;}
			// 		return 0;
			// 	})
			// }
			// // sort by name Z-A
			// if(Sort.by === 'name' && Sort.value === -1){
			// 	tasks = tasks.sort(function(a, b){
			// 		if(a.name > b.name){ return -1;}
			// 		if(a.name < b.name){ return 1;}
			// 		return 0;
			// 	})
			// }
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
							<Control filterSentences = {this.filterSentences}
								SortList = {this.SortList}
							/>   
							
							<div className="col-lg-12 col-md-12 col-xs-12">
								<br />
								<TaskList 
								filterList = {this.filterList}
								/>
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
