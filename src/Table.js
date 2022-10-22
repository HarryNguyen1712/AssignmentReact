import React, {Component} from "react";
import JsonData from './users.json';
import moment from "moment";
class User extends Component {

    constructor(props, context) {

        super(props, context);
        this.state = {
            users: JsonData.users,
            criteria: "",
        }
    }

    SortByInput = (e) => {
        this.setState({
            criteria: e.target.value,
        })
        var criteria = e.target.value;
        if(criteria===""){
            this.setState({
                users: JsonData.users,
            })
        }
        else {
            const user1s = JsonData.users.filter(user => user["id"] == (criteria) ||
                user["firstName"].toLowerCase() === criteria.toLowerCase() ||
                user["lastName"].toLowerCase() === criteria.toLowerCase() ||
                user["email"].toLowerCase() === criteria.toLowerCase() ||
                user["gender"].toLowerCase() === criteria.toLowerCase() ||
                user["birthday"].toLowerCase() === criteria.toLowerCase() ||
                user["salary"] == (criteria) ||
                user["phone"].toLowerCase() === criteria.toLowerCase()
            );
            this.setState({
                users: user1s,
            })

        }

    }

    Sort = (e) => {

        switch (e.target.value) {
            case "1": {
                this.setState({
                    users: this.state.users.sort((a, b) => a.id - b.id)
                })
                break;
            }
            case "2": {
                this.setState({
                    users: this.state.users.sort((a, b) => {
                        return a["firstName"].localeCompare(b["firstName"])
                    })
                })
                break;
            }
            case "3": {
                this.setState({
                    users: this.state.users.sort((a, b) => {
                        return a["lastName"].localeCompare(b["lastName"])
                    })
                })
                break;
            }
            case "4": {
                this.setState({
                    users: this.state.users.sort((a, b) => {
                        return a["email"].localeCompare(b["email"])
                    })
                })
                break;
            }
            case "5": {
                this.setState({
                    users: this.state.users.sort((a, b) => {
                        return new Date(a["birthday"]).getTime() -
                            new Date(b["birthday"]).getTime()
                    })
                })
                break;
            }
            case "6": {
                this.setState({
                    users: this.state.users.sort((a, b) => {
                        return a["salary"] - b["salary"]
                    })
                })
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Simple Table</h1>
                <span style={{fontSize: "3rem"}}>Order By</span>
                <select onChange={this.Sort}>
                    <option value={0}>Select field to sort</option>
                    <option value={1}>Id</option>
                    <option value={2}>First Name</option>
                    <option value={3}>Last Name</option>
                    <option value={4}>Email</option>
                    <option value={5}>Birthday</option>
                    <option value={6}>Salary</option>
                </select>
                <input type={"text"} value={this.state.criteria} className={"form-control"}
                       style={{width: "70%", margin: "auto"}} onChange={this.SortByInput}/>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Salary</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(value => {
                            return (<tr>
                                <td>{value["id"]}</td>
                                <td>{value["firstName"]}</td>
                                <td>{value["lastName"]}</td>
                                <td>{value["email"]}</td>
                                <td>{value["gender"]}</td>
                                <td>{moment(value["birthday"]).format('DD/MM/yyyy')}</td>
                                <td>{value["salary"]}</td>
                                <td>(+84){value["phone"].replaceAll("-", "")}</td>
                            </tr>)
                        })
                    }
                    </tbody>
                </table>

            </div>
        );

    }
}

export default User;