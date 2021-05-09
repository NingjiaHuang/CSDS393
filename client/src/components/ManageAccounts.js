import React, {Fragment} from 'react'
import AddAccount from './ManageAccounts/AddAccount'
import ListAccount from './ManageAccounts/ListAccount'

export default function ManageAccounts() {
    return (
        <Fragment>
            <div className = "container">
                <AddAccount />
                <ListAccount />
            </div>
            </Fragment>
    )
}
