import React from 'react';
import ToDoItems from './ToDoItems';
import './ToDoListStyle.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [],
            taskValue: ''
        }
    }

    addTask = (e) => {
        e.preventDefault();
        
        const previousTasks = this.state.tasks.slice();
        const currentTask = [{item: this.state.taskValue, key: Date.now()}]
        const updatedTasks = [...previousTasks, ...currentTask];
        console.log(updatedTasks);

        this.setState({
            tasks: updatedTasks,
            taskValue: ''
        });
    };

    delete = (key) => {
        const tasks = this.state.tasks.slice();
        const filteredTasks = tasks.filter(x => x.key !== key);

        this.setState({
            tasks: filteredTasks
        })
    }

    handleOnChange = (e) => {
        const updatedTaskName = e.target.value;

        this.setState({
            taskValue : updatedTaskName,
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addTask}>
                        <input placeholder="Enter task" value={this.state.taskValue} onChange={this.handleOnChange} />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.tasks} delete={this.delete}/>
            </div>
        );
    }
}

export default ToDoList;