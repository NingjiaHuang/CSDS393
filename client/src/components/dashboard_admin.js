import React, { Fragment, useState, useEffect } from "react";
import Card from "./Card/Card"
import manage from "../img/manageaccount.png"

const AdminDashboard = ({setAuth}) => {

    const [name, setName] = useState("")
    async function getName() {
        try{
            const response = await fetch("http://localhost:4020/admin_dashboard/", {
                method: "GET",
                headers:{token: localStorage.token}
            });
            const parseRes = await response.json()
            setName(parseRes.username)
        }catch(err){
            console.error(err.message);
        }
    }

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    useEffect(() => {
        getName()
    })
    return (
        <Fragment>
            <h1>Administrator Dashboard {name}</h1>
            <button data-testid ="logoutbtn" className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
            <Card title='Manage Account' imageUrl={manage} body='Manage existing breeder and parent accounts.' button="Manage Account" url="/manage_user_account"/>
        </Fragment>
    )
}

export default AdminDashboard;