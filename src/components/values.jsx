import React, { Component } from 'react'

class values extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                { id: "1", taskName: "Courage", type: "inProgress", backgroundColor: "red" },
                { id: "2", taskName: "Focus", type: "inProgress", backgroundColor: "green" },
                { id: "3", taskName: "Commitment", type: "inProgress", backgroundColor: "blue" },
                { id: "4", taskName: "Respect", type: "Done", backgroundColor: "green" },
                { id: "4", taskName: "Openness", type: "Done", backgroundColor: "green" }
            ]
        }
    }


    onDragStart = (event, taskName) => {
        console.log('dragstart on div: ', taskName);
        event.dataTransfer.setData("taskName", taskName);
    }
    onDragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event, cat) => {
        let taskName = event.dataTransfer.getData("taskName");

        let tasks = this.state.tasks.filter((task) => {
            if (task.taskName === taskName) {
                task.type = cat;
            }
            return task;
        });

        this.setState({
            ...this.state,
            tasks
        });
    }
    render() {
        var tasks = {
            inProgress: [],
            Done: []
        }

        this.state.tasks.forEach((task) => {
            tasks[task.type].push(
                <div key={task.id}
                    onDragStart={(event) => this.onDragStart(event, task.taskName)}
                    draggable
                    className="draggable"
                    style={{ backgroundColor: task.bgcolor }}>
                    {task.taskName}
                </div>
            );
        });

        return (
            <div className="container route-container">
                <div className="drag-container py-3">
                    <h2 className="head">Roles</h2>
                    <div className="inProgress bg-info"
                        onDragOver={(event) => this.onDragOver(event)}
                        onDrop={(event) => { this.onDrop(event, "inProgress") }}>
                        <span className="group-header ">In Progress</span>
                        {tasks.inProgress}
                    </div>
                    <div className="droppable bg-info"
                        onDragOver={(event) => this.onDragOver(event)}
                        onDrop={(event) => this.onDrop(event, "Done")}>
                        <span className="group-header">Done</span>
                        {tasks.Done}
                    </div>
                </div>
            </div>
        );
    }
}

export default values
