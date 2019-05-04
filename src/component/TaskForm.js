import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			id: '',
			name:'',
			status: false
		}
	}
	closeForm = () =>{
		this.props.closeForm();
	}
	// get data from form 
	changeData = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
	}
	// pass data to app.js to create item and modify 
	onSubmit = (event) =>{
		event.preventDefault();
		// this.props.onSubmit(this.state);
		this.props.onAddTask(this.state);
		this.setState({
			id: '',
			name: '',
			status: false
		})
	}
	// when form load componentWillMount will call and assign value for input and select
	componentWillMount(){
		if(this.props.modifyItem){
			let item = this.props.modifyItem;
			this.setState({
			id:item.id,
			name:item.name,
			status:item.status
		})
		}
	}
	componentWillReceiveProps(nextProps){
		// chuyen tu tao moi sang modify
		if(nextProps && nextProps.modifyItem){
			this.setState({
			id: nextProps.modifyItem.id,
			name: nextProps.modifyItem.name,
			status: nextProps.modifyItem.status
		})
		}
		// chuyen tu modify sang new
		if(!nextProps.modifyItem){
			this.setState({
				id: '',
				name: '',
				status: false
		})
	}
	
	}
		render(){	
			let id = this.state.id;
				return (						 
						<div className={id ? 'panel panel-danger' : 'panel panel-primary' }>
							<div className="panel-heading">
								<h3 className="panel-title">
									{id  ? 'Chỉnh sửa công việc' : 'Thêm công việc'} 
									<span className="fas fa-times-circle iconFromTask" onClick={this.closeForm}>                         
									</span>
								</h3>
							</div>
							<div className="panel-body">                  
								<form 
								onChange={this.changeData} 
								onSubmit={this.onSubmit}>                   
									<div className="form-group">
										<label>Tên :</label>
										<input type="text"
										onChange={this.changeData} 
										value={this.state.name} 
										id="nameWork"
										name="name" 
										className="form-control" />
										<label>Trang Thái :</label>
										<br />                        
										<select 
										onChange={this.changeData} 
										value={this.state.status} 
										id="status"
										name='status' 
										className="form-control" 
										required="required">
											<option value={true}>active</option>
											<option value={false}>No</option>
										</select>                        
									</div>        
									<br />    
									<div className="buttonTaskForm">
									<button type="submit" className="btn btn-warning">{id ? 'Sửa' : '+Lưu lại'}</button>                      
									<button type="button" 
									className="btn btn-danger"
									onClick={this.closeForm}
									>x Hủy bỏ</button>
									</div>
								</form>                  
							</div>
						</div>                
					
				)
		}
}
const mapStateToProps = (state) => {
	return {

	}
}
const mapDispatchToProps = (dispatch, props) =>{
	return {
		onAddTask: (tasks) =>{ // name props
			dispatch(actions.addTask(tasks)) // dispatch actions to reducer
		},
		closeForm: (id) => {
			dispatch(actions.closeForm(id))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
