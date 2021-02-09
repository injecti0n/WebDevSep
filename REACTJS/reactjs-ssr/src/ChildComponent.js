import React from 'react'
import ChildComponentSecond from './ChildCoimponent1'

function ChildComponent({userdata}) {
    return (
        <div>
            <h1>Child Component1</h1>
            {console.log("Child1",userdata)}
            <ChildComponentSecond userdata={userdata} />
        </div>
    )
}

export default ChildComponent
