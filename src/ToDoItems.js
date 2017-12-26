import React from 'react';

class ToDoItems extends React.Component {

    createTasks = (task) => {
        return <li key={task.key} onClick={() => this.clickHandler(task.key)}>{task.item}</li>
    }

    clickHandler = (key) => {
        this.props.delete(key);
    }

    render() {
            const tasks = this.props.entries.map(this.createTasks);
        return(
            <ul className="theList">
                {tasks}
            </ul>
        );
    }

}

export default ToDoItems;