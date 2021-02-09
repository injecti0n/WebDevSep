import React,{useContext} from 'react'
import {UserContext} from './context/UserContext'
function Blog() {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>{console.log(context)}</h1>
        </div>
    )
}

export default Blog
