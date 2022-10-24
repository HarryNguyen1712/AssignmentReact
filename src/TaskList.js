import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            tasks: [],
            message: "",
        }
    }

    Delete = (id) => {
        console.log(id)
        var task1 = this.state.tasks;
        console.log(task1)
        let task2 = task1.filter((value, index) => {
            return index !== id;
        })

        console.log(task2)


        this.setState({
            tasks: task2,
        })
    }
    Update = (id) => {
        this.setState({
            task: this.state.tasks.at(id)
        })
        this.Delete(id);


    }
    Add = () => {

        var task = this.state.task;
        if (task !== "") {
            this.state.tasks.push(this.state.task);
            this.forceUpdate();

            this.setState({
                task: "",
                message: "",
            })
        } else {
            this.setState({
                message: "khong duoc bo trong",
            })
        }
        console.log(this.state.tasks)

    }
    changeText = (e) => {
        this.setState({
            task: e.target.value,
        })
    }
    clear = () => {
        this.setState({
            tasks: [],
            task: ""
        })
    }

    render() {
        var main = (
            <main style={{display: "flex", justifyContent: " center", marginTop: "0.5rem"}}>
                <form className="row g-3">
                    <div className="col-auto">
                        <label htmlFor="todo" className="visually-hidden">todo</label>
                        <div>
                            <input type="text" onChange={this.changeText} value={this.state.task}
                                   className="form-control" name="todo" id="todo" placeholder="To do"/>
                            <p id="false">{this.state.message}</p>
                        </div>
                        <div className="col-auto">
                            <input type="button" name="Add item" value="Add item" className="btn btn-primary mb-3"
                                   onClick={this.Add}/>
                        </div>
                    </div>
                </form>
            </main>
        )
        if (this.state.tasks.length !== 0) {
            return (
                <div>
                    {main}
                    <div style={{display: "flex", justifyContent: " center", marginTop: "0.5rem"}
                    }>
                        <ul id="myList" className="list-group">
                            {

                                this.state.tasks.map((value, index) => {
                                    return (<div style={{display: "flex", justifyContent: "space-between"}}><p
                                            style={{width: "20rem"}}>{value}</p>
                                            <button className="btn btn-primary mb-3" onClick={
                                                () => {
                                                    this.Update(Event, index);
                                                }
                                            }>
                                                <img src="../../test/src/383148_edit_icon.svg" alt="edit SVG"/>
                                            </button>
                                            <button className="btn btn-danger mb-3" onClick={() => {
                                                this.Delete(index)
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor"
                                                     className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div style={{display: "flex", justifyContent: " center", marginTop: "0.5rem"}}>
                        <input type="button" name="Add item" value={"Clear"} className="btn btn-outline-secondary mb-3"
                               onClick={this.clear}/>
                    </div>
                </div>)
                ;

        } else {
            return main;
        }


    }
}

export default TaskList;