import React, {Fragment} from 'react'
import AddCat from './ManageCats/AddCat'
import ListCat from './ManageCats/ListCat'

export default function ManageCats() {
    return (
        <Fragment>
            <div className = "container">
                <AddCat />
                <ListCat />
            </div>
            </Fragment>
    )
}
