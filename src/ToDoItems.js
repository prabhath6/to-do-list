import React from 'react';

class ToDoItems extends React.Component {
    constructor(props) {
        super(props)
    }

    createTasks = (task) => {
        return <li key={task.key}>{task.item}</li>
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