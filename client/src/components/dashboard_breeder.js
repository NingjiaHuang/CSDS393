import React, { Fragment, useState, useEffect } from "react";
import Card from "./Card/Card"
import cattery from "../img/add.png"
import edit from "../img/edit.png"
import gene from "../img/gene.png"
import tree from "../img/tree.png"

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
            <div>
                <h1>Breeder Dashboard {name}</h1> 
                <button className="btn btn-primary" onClick={e => logout(e)}>Logout</button>
                <Card title='Edit Cat Info' imageUrl={edit} body='Edit cat information or add a new cat.' button="Edit Cat" url="/manage_cat"/>
                <Card title='Gene Calculator' imageUrl={gene} body='Get info of potential genes of kitten.' button="Gene Calculator"/>
                <Card title='Family Tree' imageUrl={tree} body='Check the ancestors and descendents of cat.' button="Family Tree"/>
                <Card title='Search Cattery' imageUrl={cattery} body='Search the catteries who use our system.' button="Search Cattery"/>
            </div>
        </Fragment>
    )
}

export default BreederDashboard;