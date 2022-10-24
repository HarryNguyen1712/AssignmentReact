import React, {useState} from "react";
import Table from "./Table";
import Form from "./Form";

function FullPage() {
    const [formState, setFormState] = useState(false);
    const [user, setUser] = useState({});

    function handleClickForm(title) {
        setFormState(formState => !formState);
    }

    function handleCreateUser(e) {
        setUser({
            id: e.target.id.value,
            name: e.target.name.value,
            age: e.target.age.value,
            address: e.target.address.value,
            phone: e.target.phone.value
        })

    }

    function userForUpdate(e, user) {
        setUser(user[0])
    }

    return (
        <div id={"main"}>
            <div style={{width: "50%", marginLeft: "3rem"}}>
                <Table user={user} func={userForUpdate}></Table>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button className={"btn btn-primary"} onClick={()=>handleClickForm("Create User")}
                            style={{marginTop: "2rem", width: "7rem"}}> Create User
                    </button>
                </div>
            </div>
            <Form state={formState} user={user} func={handleCreateUser}></Form>
        </div>
    )

}

export default FullPage;