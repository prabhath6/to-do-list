import React from 'react';

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="todolistMain">
                <div className="header">
                    <form>
                        <input placeholder="Enter task"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDoList;