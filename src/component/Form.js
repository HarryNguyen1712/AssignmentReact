import {Fragment, useState} from "react";
import Button from "./Button";
import JsonData from "../users.json";


function Form({state, user, func}) {
    let user1 = {
        id: user.id,
        name: user.name,
        age: user.age,
        address: user.address,
        phone: user.phone
    }

    //const[id,setId]= useState();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    console.log(user)
    function handleSubmit(e) {
        let bo = true;

        e.preventDefault();
        func(e)
    }

    const handleChangeName = (event) => {
        setName(event.target.value);

    };
    const handleChangeAge = event => {
        setAge(event.target.value);
    };
    const handleChangeAddress = event => {
        setAddress(event.target.value);
    };
    const handleChangePhone = event => {
        setPhone(event.target.value);
    };


    if (state) {
        return (
            <Fragment>
                <form style={{width: "40%"}} onSubmit={handleSubmit}>
                    <input type={"text"} name={"id"} value={user.id} hidden={true} readOnly={true}/>
                    <label htmlFor={"name"}>Name</label>
                    <input className={"form-control"} type={"text"} id={"name"} value={user.name || ""}
                           onChange={handleChangeName}/>
                    <label htmlFor={"age"}>Age</label>
                    <input className={"form-control"} type={"text"} id={"age"} value={user.age || ""}
                           onChange={handleChangeAge}/>
                    <label htmlFor={"address"}>Address</label>
                    <input className={"form-control"} type={"text"} id={"address"} value={user.address || ""}
                           onChange={handleChangeAddress}/>
                    <label htmlFor={"phone"}>Phone</label>
                    <input className={"form-control"} type={"text"} id={"phone"} value={user.phone || ""}
                           onChange={handleChangePhone}/>
                    {/*<Input className={"form-control"} type={"text"} id={"name"} label={"Name"} value={user.name}/>
                    <Input className={"form-control"} type={"text"} id={"age"} label={"age"} value={user.age}/>
                    <Input className={"form-control"} type={"text"} id={"address"} label={"address"} value={user.address}/>
                    <Input className={"form-control"} type={"text"} id={"phone"} label={"phone"} value={user.phone}/>*/}
                    <Button className={"btn btn-outline-primary"} title={"Create user"}/>
                </form>
            </Fragment>
        )
    }
}

export default Form;