import React, {useEffect, useState} from "react";
import usersJson from '../user2.json';

function Table({user, func}) {
    const [users, setUsers] = useState([...usersJson]);
    const [idEdit, setIdEdit] = useState([]);


    useEffect(() => {
            if (user.length !== 0) {
                if (user.id === "") {
                    user.id = Math.max(0, ...users.map(value => value.id)) + 1
                    setUsers(prev => [...prev, user])

                }
            }

        }
    )

    function handleClick(id) {
        if (idEdit.indexOf(id) < 0) {
            setIdEdit(prevState => [...prevState, id])
        } else if (idEdit.indexOf(id) >= 0) {
            setIdEdit(idEdit.filter(value => value !== id))
        }
    }

    function handleDeleteAndUpdate(user) {
        user.phone = users.find(value => value.id === user.id).phone;
        setUsers(users.map(value => value.id === user.id
            ? {...value, name: user.name, address: user.address, phone: user.phone} : value
        ))
        setIdEdit(idEdit.filter(value => value !== user.id))
    }

    function handleDelete(e, id) {
        e.stopPropagation();
        setUsers(users.filter(value => value.id !== id))
        setIdEdit(idEdit.filter(value => value !== id))
    }

    function handleUpdate(e, id) {
        e.stopPropagation();
        let user = users.filter(value => value.id === id)
        func(e, user);
    }

    function handleEdit(e, id) {
        e.preventDefault();
        let user = {
            "id": id,
            "name": e.target.name.value,
            "address": e.target.address.value,
            "phone": ""
        }
        handleDeleteAndUpdate(user);
    }

    return (
        <div className="container">
            <div className="row border  bg-light" id="heading">
                <div className="col-3 border border-dark">Id</div>
                <div className="col-3 border border-dark">Name</div>
                <div className="col-3 border border-dark">Address</div>
                <div className="col-3 border border-dark">Actions</div>
            </div>
            {
                users.map(value => {
                    if (idEdit.indexOf(value.id) >= 0) {
                        return (
                            <div className={"row border border-dark bg-light"} key={value.id}>
                                <form className={"row"} style={{padding: 0, margin: 0}}
                                      onSubmit={(Event) => handleEdit(Event, value.id)}>
                                    <div className={"col border border-dark"}>{value.id}</div>
                                    <div className={"col border border-dark"}><input type={"text"} name="name"
                                                                                     className={"form-control"}
                                                                                     defaultValue={value.name}/></div>

                                    <div className={"col border border-dark"}><input type={"text"} name="address"
                                                                                     className={"form-control"}
                                                                                     onChange={() => {
                                                                                     }}
                                                                                     defaultValue={value.address}/>
                                    </div>
                                    <div className={"col border border-dark"}>
                                        <button type={"submit"} className={"btn btn-success"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 className="bi bi-check2" viewBox="0 0 16 16">
                                                <path
                                                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )
                    } else {
                        return (
                            <div className={"row border border-dark bg-light"} onClick={() => handleClick(value.id)}>
                                <div className={"col border border-dark"}>{value.id}</div>
                                <div className={"col border border-dark"}>{value.name}</div>
                                <div className={"col border border-dark"}>{value.address}</div>
                                <div className={"col border border-dark"}>
                                    <button className={"btn btn-primary"} style={{marginRight: "1rem"}}
                                            onClick={(Event) => {
                                                handleUpdate(Event, value.id)
                                            }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path
                                                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd"
                                                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>
                                    <button className={"btn btn-danger"} onClick={(Event) => {
                                        handleDelete(Event, value.id)
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-trash" viewBox="0 0 16 16">
                                            <path
                                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                            <path fill-rule="evenodd"
                                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </div>

    )
}

export default Table;