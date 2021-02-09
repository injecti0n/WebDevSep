import React,{useContext} from 'react'
import {UserContext} from './context/UserContext'
function Users() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>Users</h1>
            <h1>{context}</h1>
        </div>
    )
}

export default Users
