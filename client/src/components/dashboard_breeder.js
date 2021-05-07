import React, { Fragment, useState, useEffect } from "react";

const BreederDashboard = ({setAuth}) => {

    const [name, setName] = useState("")
    async function getName() {
        try{
            const response = await fetch("http://localhost:4020/breeder_dashboard/", {
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
            <h1>Dashboard {name}</h1>
            <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
        </Fragment>
    )
}

export default BreederDashboard;