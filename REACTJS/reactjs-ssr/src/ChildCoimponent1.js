import React from 'react'

function ChildComponentSecond({userdata}) {
    return (
        <div>
            <h1>Child Component1</h1>
            {console.log("child2",userdata)}
            
        </div>
    )
}

export default ChildComponentSecond
