import React, { Fragment } from "react";

const BreederDashboard = ({setAuth}) => {
    return (
        <Fragment>
            <h1>Dashboard</h1>
            <button onClick={()=>setAuth(false)}>Logout</button>
        </Fragment>
    )
}

export default BreederDashboard;