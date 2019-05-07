import React, { Component } from 'react';
import TaskItemList from './TaskItemList';
import {connect} from 'react-redux';

class TaskList extends Component {
	constructor(props){
		super(props);
		this.state = {
			filterName: '',
			filterStatus: ''
		}
	}
	onChange = (event) =>{

		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
	}
		render(){
			let {tasks, filterSentences, Sort} = this.props;
			let {filterName, filterStatus} = this.state;
			// FILTER
			// filter by name
			if(filterName){
				tasks = tasks.filter((task) => {
					return task.name.toLowerCase().indexOf(filterName) >= 0;
				})
			}
			// filter status
			if(filterStatus === 'active'){
				tasks = tasks.filter((task) => {
					return task.status === true
				})
			}
			if(filterStatus === 'complete'){
				tasks = tasks.filter((task) => {
					return task.status === false
				})
			}
			// // filter Sentences
			if(filterSentences){
				tasks = tasks.filter((task) => {
					return task.name.indexOf(filterSentences) !== -1;
				})
			}
			// sort by name A- Z
			if(Sort.by === 'name' && Sort.value === 1){
				tasks = tasks.sort(function(a, b){
					if(a.name < b.name){ return -1;}
					if(a.name > b.name){ return 1;}
					return 0;
				})
			}
			// sort by name Z-A
			if(Sort.by === 'name' && Sort.value === -1){
				tasks = tasks.sort(function(a, b){
					if(a.name > b.name){ return -1;}
					if(a.name < b.name){ return 1;}
					return 0;
				})
			}
			
			var ListItem = tasks.map((item, index) => {
				return <TaskItemList 
				item={item} 
				key={item.id}
				index={index} 
				/>
			})	
				return (										           
						<table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th>Stt</th>
									<th>Tên</th>
									<th>Trạng Thái</th>
									<th>Hành động</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>
										<input type="text" 
										className="form-control" 
										
										name = 'filterName'
										value = {this.state.name}	
										onChange={this.onChange}										
										/>
									</td>
									<td>
										<select
										onChange={this.onChange}	
										name = 'filterStatus'
										value = {this.state.status}
										>
											<option value ='all'>
												Tất cả
											</option>
											<option value ='active'>
												Active
											</option>
											<option value ='complete'>
												Hết hạn
											</option>
										</select>
									</td>
                                    <td>
                                    
                                    </td>
									
								</tr>
                                {ListItem}
								
							</tbody>
						</table>
				)
		}
}
const mapStatetoProps = (state) => {
	return {
		filterSentences: state.searching.sentences,
		tasks: state.tasks,
		Sort : state.SortTask
	}
}
const mapDispatchToProps = (dispatch, props) =>{
	return {
	}	
}

export default connect(mapStatetoProps, mapDispatchToProps)(TaskList);
