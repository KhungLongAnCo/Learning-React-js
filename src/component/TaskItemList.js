import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskItemList extends Component {
        updateStatus = () => {
            this.props.toggleStatus(this.props.item.id);
        }
        deleteItem = () => {
            this.props.deleteItem(this.props.item.id);
            this.props.closeForm();
        }
        showEditTask = () => {
            this.props.openForm();
            this.props.editTask(this.props.item);
        }
		render(){	
            var tasks = this.props;
				return (					
                    <tr>
                    <td>{tasks.index + 1}</td>
                    <td>{tasks.item.name}</td>
                    <td>
                    <span 
                    className={tasks.item.status === true ? 'label label-danger' : 'label label-success'}
                    onClick={this.updateStatus}
                    >
                    {tasks.item.status === true ? 'active' : 'complete'}</span>
                    </td>
                        <td>
                            <button type="button" 
                            className="btn btn-warning"
                            onClick={this.showEditTask}
                            >
                                <i className="fas fa-wrench"></i> Sửa
                            </button>
                            <button type="button" 
                            className="btn btn-danger"
                            onClick={this.deleteItem}>
                                <i className="fas fa-trash-alt"></i> Xóa
                            </button>
                        </td>
                    </tr>
				)
		}
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        toggleStatus: (id) =>{
            dispatch(actions.toggleStatus(id))
        },
        deleteItem : (id) => {
            dispatch(actions.deleteItem(id))
        },
        closeForm: () => {
            dispatch(actions.closeForm());
        },
        openForm: () => {
            dispatch(actions.openForm());
        },
        editTask : (task) =>{
            dispatch(actions.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItemList);
